'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Zap, Search, ArrowRight, Database, Bot, Code2 } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "AI SEO Audit Tool",
            category: "SaaS Product",
            description: "A comprehensive SEO & GEO optimization platform built with Next.js 15. Features AI-driven content analysis, automated issue detection, and generative engine visibility scoring.",
            tags: ["Next.js 15", "Prisma", "Gemini AI", "PostgreSQL"],
            color: "from-purple-500 to-pink-500",
            metrics: [
                { label: "AI Analysis", value: "Auto-Fix", icon: <Bot className="w-3 h-3" /> },
                { label: "Tech Stack", value: "Modern", icon: <Database className="w-3 h-3" /> }
            ]
        },
        {
            title: "BillyBills",
            category: "FinTech Web App",
            description: "A multi-tenant billing and invoicing application. Handles recurring invoices, custom templates, and financial reporting with real-time data sync.",
            tags: ["Next.js", "Firebase", "Redux Toolkit", "Tailwind"],
            color: "from-blue-500 to-cyan-500",
            metrics: [
                { label: "Invoices", value: "Recurring", icon: <Zap className="w-3 h-3" /> },
                { label: "Sync", value: "Real-time", icon: <TrendingUp className="w-3 h-3" /> }
            ]
        },
        {
            title: "InfoSphere 4.0",
            category: "Data Tool",
            description: "Advanced profile scraping and information aggregation tool. Parses GitHub profiles and blogs to generate comprehensive user portfolios in JSON format.",
            tags: ["Python", "Flask", "BeautifulSoup", "API"],
            color: "from-green-500 to-emerald-500",
            metrics: [
                { label: "Parsing", value: "Multi-Source", icon: <Search className="w-3 h-3" /> },
                { label: "Export", value: "JSON/CSV", icon: <Database className="w-3 h-3" /> }
            ]
        },
        {
            title: "AI SEO Platform",
            category: "Internship Project",
            description: "Contributed to Trident Solutions' flagship SEO product. Built the AI Auto-Fix module and Visibility Scoring system for enterprise clients.",
            tags: ["React", "Node.js", "AI Integration"],
            color: "from-orange-500 to-red-500",
            metrics: [
                { label: "Impact", value: "Enterprise", icon: <Zap className="w-3 h-3" /> },
                { label: "Role", value: "Full Stack", icon: <Code2 className="w-3 h-3" /> }
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-4"
                    >
                        Selected Work
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl text-lg"
                    >
                        A showcase of my technical expertise, ranging from complex SaaS platforms to AI-driven tools and high-performance web applications.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                        >
                            {/* Image Placeholder / Gradient */}
                            <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10 text-white">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    <div className="flex gap-2">
                                        <button suppressHydrationWarning className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </button>
                                        <button suppressHydrationWarning className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded border border-white/5">
                                            <span className="text-purple-400">{metric.icon}</span>
                                            <span className="font-bold">{metric.value}</span>
                                            <span className="text-gray-500 text-xs">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
