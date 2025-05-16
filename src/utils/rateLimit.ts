import { NextResponse } from 'next/server';

// In-memory store for rate limiting (use Redis in production)
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10; // Max requests per window

export const rateLimit = (ip: string) => {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Get or initialize request timestamps for this IP
  const requestTimestamps = rateLimitMap.get(ip) || [];
  
  // Filter out old requests outside the current window
  const recentRequests = requestTimestamps.filter(timestamp => timestamp > windowStart);
  
  // Add current request timestamp
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  // Check if rate limit is exceeded
  if (recentRequests.length > MAX_REQUESTS) {
    return {
      isRateLimited: true,
      remaining: 0,
      resetTime: new Date(windowStart + WINDOW_MS).getTime(),
    };
  }

  return {
    isRateLimited: false,
    remaining: Math.max(0, MAX_REQUESTS - recentRequests.length),
    resetTime: new Date(windowStart + WINDOW_MS).getTime(),
  };
};

export const withRateLimit = (handler: Function) => async (req: Request) => {
  // Get client IP (works differently in production)
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(/, /)[0] : '127.0.0.1';

  const { isRateLimited, remaining, resetTime } = rateLimit(ip);

  // Set rate limit headers
  const headers = new Headers();
  headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString());
  headers.set('X-RateLimit-Remaining', remaining.toString());
  headers.set('X-RateLimit-Reset', Math.ceil(resetTime / 1000).toString());

  if (isRateLimited) {
    return new NextResponse(
      JSON.stringify({ 
        error: 'Too many requests, please try again later.' 
      }),
      { 
        status: 429,
        headers: {
          ...Object.fromEntries(headers),
          'Content-Type': 'application/json',
        },
      }
    );
  }

  // Add rate limit headers to successful responses
  const response = await handler(req);
  
  if (response instanceof NextResponse) {
    headers.forEach((value, key) => {
      response.headers.set(key, value);
    });
  }

  return response;
};
