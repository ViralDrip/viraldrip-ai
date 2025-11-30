import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle2, Youtube, Linkedin, Twitter, Instagram, Video, Star } from 'lucide-react';
import { HERO_TESTIMONIALS } from '../constants';
import { PipelineBoard } from './PipelineBoard';

const PlatformIcon = ({ platform }: { platform: string }) => {
  const p = platform.toLowerCase();
  if (p.includes('youtube')) return <Youtube size={14} className="fill-current" />;
  if (p.includes('linkedin')) return <Linkedin size={14} className="fill-current" />;
  if (p.includes('twitter') || p.includes('x')) return <Twitter size={14} className="fill-current" />;
  if (p.includes('instagram') || p.includes('ig')) return <Instagram size={14} className="stroke-current" />;
  if (p.includes('tiktok')) return <Video size={14} className="fill-current" />;
  return <CheckCircle2 size={14} />;
};

const getPlatformColor = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('youtube')) return 'text-red-500 bg-red-500/10 border-red-500/20';
  if (p.includes('linkedin')) return 'text-blue-600 bg-blue-600/10 border-blue-600/20';
  if (p.includes('twitter') || p.includes('x')) return 'text-slate-200 bg-slate-700/30 border-slate-600/30';
  if (p.includes('instagram') || p.includes('ig')) return 'text-pink-500 bg-pink-500/10 border-pink-500/20';
  if (p.includes('tiktok')) return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
  return 'text-purple-500 bg-purple-500/10 border-purple-500/20';
};

export const Hero: React.FC = () => {

  return (
    <section className="relative h-screen flex flex-col pt-20 bg-slate-950 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-600/20 rounded-[100%] blur-[100px] opacity-40"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full relative z-10 h-full pb-4 lg:pb-0">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-300 text-xs font-semibold mb-6 md:mb-8 tracking-wide mx-auto lg:mx-0">
                <CheckCircle2 size={14} className="text-blue-400" />
                <span className="text-[11px] sm:text-xs">Custom CRM Automation for Business Owners</span>
             </div>

             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 md:mb-8 text-white tracking-tight">
                Build Content. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                    Keep Your Business.
                </span>
             </h1>

             <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                We build custom CRM pipelines in your existing workflow (or set one up for you) that automate the tedious parts of content creation—research, scripting, planning—while you keep full creative control.
             </p>

             <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://calendly.com/jonas-algowerk/30min-meeting-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  Book Strategy Audit
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </a>
                <a
                  href="#demo"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 md:w-5 h-4 md:h-5 text-blue-400" />
                  See Demo
                </a>
             </div>
          </motion.div>
        </div>

        {/* Right Column: Pipeline Visualization */}
        <div className="hidden lg:flex items-center justify-center h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full"
            >
                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>

                {/* Pipeline Board */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <h3 className="text-sm font-bold text-white">Your Content Pipeline</h3>
                        </div>
                        <p className="text-xs text-slate-400">AI populates • You approve • Content publishes</p>
                    </div>

                    <PipelineBoard compact={true} showActions={true} />

                    <div className="mt-6 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Last updated: 2 min ago</span>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-slate-900"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center">
                                        <CheckCircle2 className="w-3 h-3 text-slate-400" />
                                    </div>
                                </div>
                                <span className="text-slate-400">You + AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Footer Ticker - Redesigned Cards */}
      <div className="mt-auto w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-xl py-6 pb-12 md:pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
             <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_6rem,black_calc(100%-6rem),transparent)]">
                <motion.div
                    className="flex gap-6 py-4"
                    animate={{ x: [0, -1920] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                        repeatType: "loop"
                    }}
                >
                    {[...HERO_TESTIMONIALS, ...HERO_TESTIMONIALS, ...HERO_TESTIMONIALS, ...HERO_TESTIMONIALS].map((t, i) => (
                        <div
                            key={i}
                            className="flex flex-col min-w-[280px] p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 hover:border-blue-500/30 transition-all backdrop-blur-sm group cursor-default shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full border-2 border-blue-500/30" />
                                <div className="flex-1">
                                    <div className="text-white font-bold text-sm mb-0.5">{t.name}</div>
                                    <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${getPlatformColor(t.platform)}`}>
                                        <PlatformIcon platform={t.platform} />
                                        <span>{t.platform}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-300 text-sm mb-3 leading-relaxed line-clamp-2">"{t.text}"</p>

                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="pt-3 border-t border-white/5">
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Audience</div>
                                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-space tracking-tight">
                                    {t.followers}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};