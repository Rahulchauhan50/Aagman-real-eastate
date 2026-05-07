"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-brand-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-bold text-2xl text-brand-dark tracking-wider uppercase">
              {/* <Image width={220} height={220} src="/logo.png" alt="InnoTech Solutions Logo" className="h-8 w-auto mr-2" /> */}
              <img src="/logo.png" alt="InnoTech Solutions Logo" className="h-22 w-auto mr-2" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Our Services</Link>
            <Link href="/insights" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Insights</Link>
            <Link href="/contact" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Contact Us</Link>
            <Link href="/contact" className="bg-brand-gold text-white hover:bg-brand-darkDeep px-6 py-2 text-xs font-bold uppercase tracking-wider transition-colors ml-4">
              Partner With Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-gold focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-cream shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            <Link onClick={() => setIsMenuOpen(false)} href="/" className="block px-3 py-3 text-brand-dark hover:bg-brand-pale hover:text-brand-gold text-base font-medium transition-colors">Home</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/about" className="block px-3 py-3 text-brand-dark hover:bg-brand-pale hover:text-brand-gold text-base font-medium transition-colors">About Us</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/services" className="block px-3 py-3 text-brand-dark hover:bg-brand-pale hover:text-brand-gold text-base font-medium transition-colors">Our Services</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/insights" className="block px-3 py-3 text-brand-dark hover:bg-brand-pale hover:text-brand-gold text-base font-medium transition-colors">Insights</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="block px-3 py-3 text-brand-dark hover:bg-brand-pale hover:text-brand-gold text-base font-medium transition-colors">Contact Us</Link>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="block w-full text-center bg-brand-gold text-white hover:bg-brand-darkDeep px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors">
                Partner With Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
