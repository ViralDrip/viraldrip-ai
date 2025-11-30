import React from 'react';
import { ArrowRight, Calendar, Check } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="book" className="py-20 md:py-32 lg:py-40 bg-slate-950 relative overflow-hidden flex items-center justify-center border-t border-white/5">
       {/* Subtle Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Get Your Time Back. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Keep Your Business Growing.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          One custom pipeline. Built in 3 weeks. Saves 15+ hours/week. Runs in the background while you focus on what actually makes you money.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-16">
          <a href="https://calendly.com/jonas-algowerk/30min-meeting-clone" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform flex items-center justify-center shadow-lg shadow-blue-500/40">
            <Calendar className="mr-3 w-5 md:w-6 h-5 md:h-6" />
            Schedule Free Pipeline Audit
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left max-w-3xl mx-auto">
             <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                    <h4 className="text-white font-bold">Built for Your Workflow</h4>
                    <p className="text-slate-500 text-sm">We use your existing tools—Notion, Airtable, Slack. No new logins.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                    <h4 className="text-white font-bold">You Stay in Control</h4>
                    <p className="text-slate-500 text-sm">AI drafts. You approve, reject, or refine. Your voice. Your brand.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                    <h4 className="text-white font-bold">Custom, Not Template</h4>
                    <p className="text-slate-500 text-sm">Every pipeline is built for your business, your platforms, your goals.</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};