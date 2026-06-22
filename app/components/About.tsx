'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, Globe, Database, Smartphone } from 'lucide-react';

export default function About() {
    const skills = [
        { name: "Next.js & React", icon: <Code2 className="w-5 h-5" /> },
        { name: "SEO & GEO", icon: <Globe className="w-5 h-5" /> },
        { name: "AI Integration", icon: <Brain className="w-5 h-5" /> },
        { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
        { name: "PostgreSQL & Firebase", icon: <Database className="w-5 h-5" /> },
        { name: "Performance", icon: <Rocket className="w-5 h-5" /> },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-6">
                            About Me
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Bridging the Gap Between <br />
                            <span className="text-gradient">Complex Tech</span> & <br />
                            <span className="text-gradient-secondary">Business Growth</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am <strong>Sanjaykumaran B</strong>, a Full-Stack Developer and SEO Engineer based in Chennai. I don't just write code; I build digital assets that drive revenue.
                            </p>
                            <p>
                                With experience building complex SaaS platforms like <strong>BillyBills</strong> and AI-powered SEO tools, I understand the full lifecycle of a digital product—from database design to getting it ranked #1 on Google.
                            </p>
                            <p>
                                My mission is simple: To empower businesses with future-proof digital solutions that dominate search engines—both traditional (Google) and generative (ChatGPT).
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-300">
                                    <div className="text-purple-400">{skill.icon}</div>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl -z-10" />
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Code2 className="w-32 h-32" />
                            </div>

                            <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-white">Technical Excellence</h4>
                                        <p className="text-sm text-gray-400 mt-1">Clean, maintainable code built on modern stacks like Next.js 15, Prisma, and React Native.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-white">SEO-First Approach</h4>
                                        <p className="text-sm text-gray-400 mt-1">I don't just build; I ensure your site ranks. Technical SEO is baked into every line of code.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-white">Future-Proofing</h4>
                                        <p className="text-sm text-gray-400 mt-1">Ready for the AI era. I optimize for Generative Engines to keep you ahead of the curve.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
