'use client';

import { motion } from 'framer-motion';
import { Code2, Search, Bot, Smartphone, Brain, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Full Stack Web Development",
            description: "High-performance, scalable web applications built with Next.js 15, React, and Node.js. Optimized for speed and conversion.",
            icon: <Code2 className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Advanced SEO Optimization",
            description: "Technical and On-page SEO strategies that drive organic traffic. I fix core web vitals, structure data, and dominate SERPs.",
            icon: <Search className="w-8 h-8" />,
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "GEO (AI Search Optimization)",
            description: "Future-proof your brand for AI engines. I optimize your content to be the top answer on ChatGPT, Gemini, Claude, and Perplexity.",
            icon: <Bot className="w-8 h-8" />,
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "App Development",
            description: "Cross-platform mobile apps using React Native and Firebase. Native performance with a single codebase for iOS and Android.",
            icon: <Smartphone className="w-8 h-8" />,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "AI Automation & Tools",
            description: "Custom AI agents, chatbots, and workflow automations that save time and reduce costs. Powered by OpenAI and Anthropic APIs.",
            icon: <Brain className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500"
        }
    ];

    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-4"
                    >
                        My Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Comprehensive <span className="text-gradient">Digital Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        I combine engineering precision with marketing strategy to deliver products that not only look great but also perform and rank.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-300"
                        >
                            <div className="bg-[#0a0a0a] p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group-hover:translate-y-[-5px] transition-transform flex flex-col">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 blur-3xl rounded-full group-hover:opacity-20 transition-opacity`} />

                                <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-white/20 transition-colors text-white">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
