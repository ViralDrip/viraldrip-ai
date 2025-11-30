import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Star, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 lg:py-40 pb-32 md:pb-40 lg:pb-48 bg-slate-950 relative overflow-hidden flex flex-col justify-center">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-950 z-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-sm font-bold mb-6"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Client Results</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Business Owners Who <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Got Their Time Back
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform group-hover:scale-105"></div>
              
              <div className="bg-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 relative hover:border-purple-500/30 transition-all duration-300 shadow-2xl h-full flex flex-col">
                
                {/* Decoration: Quote Icon */}
                <div className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                    <Quote className="text-white w-6 h-6 fill-white" />
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-blue-500">
                            <img 
                                src={t.avatar} 
                                alt={t.name} 
                                className="w-full h-full rounded-full object-cover border-2 border-slate-900"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-0.5 rounded-full border-2 border-slate-900">
                            <CheckCircle2 className="w-3 h-3" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg leading-none mb-1">{t.name}</h4>
                        <p className="text-slate-400 text-sm font-medium">{t.role}</p>
                    </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg mb-8 flex-grow">
                    "{t.content}"
                </p>

                {/* Viral Result Badge */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Results</span>
                    <div className="flex items-center gap-2 text-green-400 font-bold bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                        <TrendingUp className="w-4 h-4" />
                        {t.result}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};