import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 backdrop-blur-md bg-black/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    <span className="text-gradient">Sanjay</span>.Dev
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                    <Link href="#tool" className="hover:text-white transition-colors">AI Tool</Link>
                    <Link href="#contact" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all border border-white/10">
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
}
