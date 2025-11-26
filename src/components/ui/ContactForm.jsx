import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_4qautwm';
    const TEMPLATE_ID = 'template_vdb4s8l';
    const PUBLIC_KEY = '5vMRchHAOs6Ub7eJ6';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-lg mx-auto p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-green-700 hover:text-green-800 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 text-left">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="Your Name"
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 text-left">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="your@email.com"
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 text-left">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
          placeholder="How can I help you?"
          disabled={status === 'sending'}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again later.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
