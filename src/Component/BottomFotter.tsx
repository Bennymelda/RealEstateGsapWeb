import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-between py-10 overflow-hidden font-sans text-white">
      {/* Background Image / Video Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="./last.jpg"
          alt="Happy family sitting together on a couch"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        {/* Subtle gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Top / Center Overlay Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6">
          Find You. We'll Help You Get There.
        </h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
        >
          <span>Explore More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

  

  
    </section>
  );
};

export default HeroSection;