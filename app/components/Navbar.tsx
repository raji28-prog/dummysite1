'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: 'About',    href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'AI Tool',  href: '#tool' },
        { label: 'Blog',     href: '#blog' },
        { label: 'Resume',   href: '/resume' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 backdrop-blur-md bg-black/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    <span className="text-gradient">Sanjay</span>.Dev
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-white transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all border border-white/10"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all border border-white/10 text-center"
                    >
                        Hire Me
                    </Link>
                </div>
            )}
        </nav>
    );
}
