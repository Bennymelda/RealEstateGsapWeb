import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
  };

  return (
    <footer className="w-full bg-black text-white px-6 md:px-6 pt-16 pb-6 flex flex-col justify-between min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        {/* Left Side: Newsletter & Office Details */}
        <div className="flex flex-col gap-14 max-w-2xl">
          {/* Newsletter Form */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Subscribe to our Newsletter!</h3>
            <form onSubmit={handleSubmit} className="relative w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter address"
                required
                className="w-full bg-transparent border-b border-neutral-700 py-3 pr-10 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-xs uppercase text-neutral-400 font-semibold mb-2">Head Office</h4>
              <p className="text-neutral-300 leading-relaxed">
                6 Blant, 6th Street, GRA Phase,<br />
                New York, NY 10016
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase text-neutral-400 font-semibold mb-2">Enquiries</h4>
              <a
                href="mailto:hello@findyourself.com"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                hello@findyourself.com
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase text-neutral-400 font-semibold mb-2">Call Us</h4>
              <a
                href="tel:+15554440000"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                +1 555 444 0000
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Nav Links */}
        <nav className="flex flex-col gap-3 text-sm lg:items-end">
          <a href="#search" className="text-neutral-300 hover:text-white transition-colors">Search</a>
          <a href="#agents" className="text-neutral-300 hover:text-white transition-colors">Agents</a>
          <a href="#join" className="text-neutral-300 hover:text-white transition-colors">Join</a>
          <a href="#about" className="text-neutral-300 hover:text-white transition-colors">About Us</a>
          <a href="#portal" className="text-neutral-300 hover:text-white transition-colors">Agent Portal</a>
        </nav>
      </div>

      {/* Hero Brand Title */}
      <div className="my-16 text-center overflow-hidden">
        <svg
          viewBox="0 0 700 200"
          className="w-full max-h-[300px] select-none fill-white"
          aria-label="FIND Logo"
        >
          {/* F */}
          <path d="M 20 20 H 120 V 55 H 65 V 90 H 115 V 125 H 65 V 180 H 20 Z" />
          {/* Custom Arrow / I */}
          <path d="M 135 20 L 205 100 L 135 180 H 180 L 225 100 L 180 20 Z" />
          {/* N */}
          <path d="M 245 20 H 285 L 345 125 V 20 H 385 V 180 H 345 L 285 75 V 180 H 245 Z" />
          {/* D */}
          <path d="M 405 20 H 480 C 530 20 560 50 560 100 C 560 150 530 180 480 180 H 405 Z M 450 60 V 140 H 475 C 500 140 515 125 515 100 C 515 75 500 60 475 60 Z" />
        </svg>
      </div>

      {/* Bottom Footer Links */}
      <div className="border-t border-neutral-800 pt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <span>|</span>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy policy</a>
          <span>|</span>
          <a href="#faq" className="hover:text-white transition-colors">Faq</a>
          <span>|</span>
          <a href="#terms" className="hover:text-white transition-colors">Terms and conditions</a>
          <span>|</span>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          <span>|</span>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <span>|</span>
          <a href="#support" className="hover:text-white transition-colors">Customer Support</a>
          <span>|</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;