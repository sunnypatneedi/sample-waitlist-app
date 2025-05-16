import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Types for Resend API responses
type ContactResponse = {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  unsubscribed: boolean;
  created_at: string;
};

type ResendResponse<T> = {
  data: T | null;
  error: {
    name: string;
    message: string;
    statusCode: number;
  } | null;
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Add contact to Resend Audience
    const contactResponse = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    }) as unknown as ResendResponse<ContactResponse>; // Type assertion to handle Resend's response type

    if (contactResponse.error) {
      console.error('Resend API error:', contactResponse.error);
      throw new Error(contactResponse.error.message || 'Failed to add to waitlist');
    }

    if (!contactResponse.data) {
      throw new Error('No data returned from Resend API');
    }

    // For testing: Only send email to the owner's verified email
    // In production, you would verify your domain and use your own email
    const ownerEmail = 'sunnypatneedi@gmail.com';
    const isTestEmail = email === ownerEmail;
    let emailError = null;
    
    if (isTestEmail) {
      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev', // Must be a verified sender in Resend
        to: ownerEmail,
        subject: 'You\'re on the waitlist!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #4f46e5;">Welcome to our waitlist! 🎉</h1>
            <p>Thank you for joining our waitlist. We'll be in touch soon with updates.</p>
            <p>Email submitted: ${email}</p>
            <p>Best,<br>The Team</p>
          </div>
        `,
      }) as unknown as ResendResponse<{ id: string }>;
      
      if (emailResponse.error) {
        emailError = emailResponse.error;
        console.error('Email sending error:', emailError);
      }
    } else {
      console.log(`Skipping email to ${email} - only sending to verified email in test mode`);
    }

    if (emailError) {
      console.log('Continuing despite email error...');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined waitlist!',
        contactId: contactResponse.data.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Waitlist submission error:', error);
    
    // Handle API errors
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: error.message || 'Failed to process your request',
          details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// TypeScript types for the request/response
type WaitlistRequest = {
  email: string;
};

type WaitlistResponse = {
  success: boolean;
  message: string;
  contactId?: string;
  error?: string;
  details?: any;
};
