import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © 2025 Sanjay.Dev. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="mailto:sanjaykumaranbalu3112@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
}
