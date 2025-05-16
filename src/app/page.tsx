'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { triggerConfetti } from '@/utils/confetti';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  
  // Trigger confetti on success
  useEffect(() => {
    if (status === 'success') {
      triggerConfetti();
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous messages
    setMessage('');
    
    // Client-side validation
    if (!email) {
      setMessage('Please enter your email');
      setStatus('error');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Get rate limit info from headers
      const remaining = response.headers.get('X-RateLimit-Remaining');
      if (remaining) {
        setRemainingAttempts(parseInt(remaining, 10));
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist. Please try again.');
      }

      
      // Success - show success state
      setStatus('success');
      setEmail('');
      setMessage("You've been added to the waitlist! Check your email for confirmation. 🎉");
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      const errorMessage = error instanceof Error ? 
        error.message : 'Failed to join waitlist. Please try again later.';
      setMessage(errorMessage);
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Waitlist</h1>
          <p className="text-gray-600">Be the first to know when we launch!</p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You're on the list! 🎉</h3>
              <p className="text-gray-600">Check your email for confirmation.</p>
              <p className="text-sm text-gray-500 mt-4">
                We'll be in touch with updates soon!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5 mr-2 -ml-1" />
                        Join Waitlist
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-md ${
                          status === 'error' ? 'bg-red-50' : 'bg-green-50'
                        }`}
                      >
                        {status === 'error' ? (
                          <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        )}
                        <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-green-700'}`}>
                          {message}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {remainingAttempts !== null && (
                    <p className="text-xs text-center text-gray-500">
                      {remainingAttempts > 0 
                        ? `${remainingAttempts} attempts remaining this hour`
                        : 'Rate limit exceeded. Please try again later.'}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
