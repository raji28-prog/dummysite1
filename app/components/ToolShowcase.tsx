'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';

export default function ToolShowcase() {
    return (
        <section id="tool" className="py-24 relative overflow-hidden bg-black/40">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-6">
                        Proprietary Technology
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Meet My <span className="text-gradient">AI SEO Assistant</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        I built a custom AI-powered auditing tool that goes beyond traditional SEO. It analyzes your site's readiness for Generative Engines (GEO) and provides actionable, code-level fixes.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Cpu className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Deep Content Analysis</h3>
                                <p className="text-gray-400 text-sm mt-1">Uses Gemini AI to understand semantic depth and relevance for AI search visibility.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Activity className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Automated Health Checks</h3>
                                <p className="text-gray-400 text-sm mt-1">Instant detection of Core Web Vitals issues, broken links, and missing schema markup.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">One-Click Fixes</h3>
                                <p className="text-gray-400 text-sm mt-1">Generates copy-paste code snippets to fix identified issues instantly.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-purple-600/20 blur-[100px] -z-10" />

                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">ai-seo-audit.exe</div>
                        </div>

                        <div className="p-6 font-mono text-sm space-y-4 h-[400px] overflow-y-auto custom-scrollbar">
                            <div className="text-green-400">$ init seo-audit --url https://client-site.com</div>
                            <div className="text-gray-400">Initializing crawler...</div>
                            <div className="text-gray-400">Fetching pages... [====================] 100%</div>

                            <div className="space-y-1">
                                <div className="text-blue-400">➜ Analyzing Core Web Vitals...</div>
                                <div className="pl-4 text-gray-300">LCP: 1.2s <span className="text-green-500">[GOOD]</span></div>
                                <div className="pl-4 text-gray-300">CLS: 0.05 <span className="text-green-500">[GOOD]</span></div>
                                <div className="pl-4 text-gray-300">FID: 12ms <span className="text-green-500">[GOOD]</span></div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-purple-400">➜ Checking GEO Readiness...</div>
                                <div className="pl-4 text-gray-300">Semantic Density: <span className="text-green-500">High</span></div>
                                <div className="pl-4 text-gray-300">Entity Recognition: <span className="text-green-500">High</span></div>
                                <div className="pl-4 text-gray-300">Schema Markup: <span className="text-green-500">Valid</span></div>
                            </div>

                            <div className="mt-4 p-3 bg-white/5 border-l-2 border-green-500 text-gray-300">
                                <span className="text-green-500 font-bold">✓ Result:</span> Site is optimized for AI Search. No critical issues found.
                            </div>

                            <div className="text-gray-500 animate-pulse">_</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
