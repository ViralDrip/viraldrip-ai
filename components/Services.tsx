import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-40 bg-slate-950 relative flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>What You Get</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Custom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Content Operating System
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A complete pipeline built in your CRM (ClickUp, Airtable, or whatever you use). AI handles the grind. You keep creative control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-105"></div>

              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-lg h-full">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Small indicator dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-slate-900"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};