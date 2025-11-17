'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBranchesOpen, setIsMobileBranchesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#5A0D0D] border-b-2 border-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/iop-logo.png"
              alt="IOP Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-sm text-white/90 hidden sm:inline" style={{ fontFamily: 'var(--font-cormorant)' }}>Institute of Politics at Stanford</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-white/80 font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsBranchesOpen(true)}
              onMouseLeave={() => setIsBranchesOpen(false)}
            >
              <button className="text-white hover:text-white/80 font-bold flex items-center" style={{ fontFamily: 'var(--font-oswald)' }}>
                Branches
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBranchesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border-2 border-white shadow-lg py-2">
                  <Link href="/political-review" className="block px-4 py-2 text-black hover:bg-[#8C1515] hover:text-white font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
                    Political Review
                  </Link>
                  <Link href="/branches/community-service" className="block px-4 py-2 text-black hover:bg-[#8C1515] hover:text-white font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
                    Community-Engaged Direct Service
                  </Link>
                  <Link href="/branches/mentorship" className="block px-4 py-2 text-black hover:bg-[#8C1515] hover:text-white font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
                    Public Service Mentorship
                  </Link>
                  <Link href="/branches/programming" className="block px-4 py-2 text-black hover:bg-[#8C1515] hover:text-white font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
                    Programming & Events
                  </Link>
                </div>
              )}
            </div>
            <Link href="/fellows-mentors" className="text-white hover:text-white/80 font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
              Fellows & Mentors
            </Link>
            <Link href="/opportunities" className="text-white hover:text-white/80 font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
              Events
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-white py-4">
            <Link href="/" className="block px-4 py-2 text-white hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-white hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-white/20"
                onClick={() => setIsMobileBranchesOpen(!isMobileBranchesOpen)}
              >
                <span>Branches</span>
                <svg className={`h-4 w-4 transition-transform ${isMobileBranchesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileBranchesOpen && (
                <div className="pl-4">
                  <Link href="/political-review" className="block px-4 py-2 text-white/80 hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                    Political Review
                  </Link>
                  <Link href="/branches/community-service" className="block px-4 py-2 text-white/80 hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                    Community-Engaged Direct Service
                  </Link>
                  <Link href="/branches/mentorship" className="block px-4 py-2 text-white/80 hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                    Public Service Mentorship
                  </Link>
                  <Link href="/branches/programming" className="block px-4 py-2 text-white/80 hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                    Programming & Events
                  </Link>
                </div>
              )}
            </div>
            <Link href="/fellows-mentors" className="block px-4 py-2 text-white hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
              Fellows & Mentors
            </Link>
            <Link href="/opportunities" className="block px-4 py-2 text-white hover:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
              Events
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

