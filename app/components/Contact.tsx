'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-6">
                            Get In Touch
                        </div>
                        <h2 className="text-4xl font-bold mb-6">Let's Build Something <br /><span className="text-gradient">Extraordinary</span></h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Ready to take your digital presence to the next level? Whether you need a website overhaul, an SEO strategy, or a custom AI tool, I'm here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Email</div>
                                    <div className="font-medium text-white">sanjaykumaranbalu3112@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Location</div>
                                    <div className="font-medium text-white">Chennai, India (Remote Worldwide)</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium">Name</label>
                                <input suppressHydrationWarning type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium">Email</label>
                                <input suppressHydrationWarning type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium">Service Interest</label>
                            <select suppressHydrationWarning className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-300">
                                <option>Full Stack Development</option>
                                <option>SEO & GEO Optimization</option>
                                <option>App Development</option>
                                <option>AI Automation</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium">Message</label>
                            <textarea suppressHydrationWarning className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none" placeholder="Tell me about your project goals..."></textarea>
                        </div>

                        <button suppressHydrationWarning type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
