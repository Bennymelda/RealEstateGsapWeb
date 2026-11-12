import React, { useState } from 'react';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Search', href: '#' },
  { label: 'Agents', href: '#' },
  { label: 'Join', href: '#' },
  { label: 'Payments', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'About', href: '#', hasDropdown: true },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-0.5 text-2xl font-black tracking-tight text-slate-900 select-none">
          <span>F</span>
          <span className="inline-block text-xl font-black leading-none translate-y-[-1px]">1</span>
          <span>ND</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-800">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors py-1"
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className="w-3.5 h-3.5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#signin"
            className="px-6 py-2.5 rounded-full bg-slate-950 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-800 hover:text-slate-950 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-6 border-b border-slate-200/50 shadow-lg">
          <nav className="flex flex-col gap-4 text-slate-800 font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-1 text-base hover:text-slate-950"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
            <a
              href="#signin"
              className="mt-2 w-full text-center px-6 py-3 rounded-full bg-slate-950 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;