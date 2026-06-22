'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Search, Bot } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Available for Freelance Projects
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        AI-Powered SEO & <br />
                        <span className="text-gradient">Web Experiences</span> <br />
                        That Actually Convert
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                        I’m a Full-Stack Developer & SEO Engineer from Chennai. I build high-performance websites and AI-powered SEO systems that help your business grow on Google AND AI search.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="#contact" 
                            onClick={() => sendGAEvent({ event: 'button_click', value: 'hero_consultation' })}
                            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-white transition-all glow flex items-center gap-2"
                        >
                            Book a Free Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            href="#projects" 
                            onClick={() => sendGAEvent({ event: 'button_click', value: 'hero_view_work' })}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all"
                        >
                            View My Work
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs">
                                    {i === 3 ? '+' : ''}
                                </div>
                            ))}
                        </div>
                        <p>Helping startups & founders worldwide</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square animate-float">
                        {/* Abstract 3D-like representation */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
                        <div className="relative z-10 glass-panel p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Sparkles className="w-3 h-3 text-purple-400" />
                                    Sanjay.Dev Portfolio
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        <Code2 className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Web Development</div>
                                        <div className="text-xs text-gray-400">Next.js 15, React, Tailwind</div>
                                    </div>
                                    <div className="ml-auto text-blue-400 text-xs font-mono">Full Stack</div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        <Search className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">SEO & GEO</div>
                                        <div className="text-xs text-gray-400">Google & AI Search Visibility</div>
                                    </div>
                                    <div className="ml-auto text-purple-400 text-xs font-mono">Top Rank</div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        <Bot className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">AI Solutions</div>
                                        <div className="text-xs text-gray-400">Custom Tools & Automation</div>
                                    </div>
                                    <div className="ml-auto text-pink-400 text-xs font-mono">Automated</div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm text-center">
                                    <div className="text-purple-200 font-medium mb-1">🚀 Recent Wins</div>
                                    <div className="text-xs text-gray-400">
                                        Built AI SEO Audit Tool • Scaled SaaS to 50+ Users
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
