import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 lg:py-40 bg-slate-950 relative flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 md:mb-16 leading-tight">
          Common Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-2xl bg-slate-900/50 overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between text-left gap-4"
              >
                <span className="text-base md:text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-8 pb-6 md:pb-8 pt-0 text-slate-400 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};