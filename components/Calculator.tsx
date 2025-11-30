import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(100);

  // Assumptions: We automate 80% of the work
  const hoursSavedPerYear = hours * 52 * 0.8;
  const moneySavedPerYear = hoursSavedPerYear * rate;
  const potentialRevenue = moneySavedPerYear * 3; // Estimating revenue upside from consistency

  return (
    <section id="calculator" className="py-20 md:py-32 lg:py-40 bg-slate-950 relative overflow-hidden">
      {/* Background - very subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What's Content <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Really Costing You?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
            Calculate the true cost of manual content creation—and what you could save.
          </p>

          <div className="space-y-8">
            {/* Input 1 */}
            <div className="bg-slate-900/50 p-4 md:p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mb-4">
                    <label className="text-slate-300 font-medium text-sm md:text-base">Hours spent on content per week</label>
                    <span className="text-white font-bold text-xl">{hours}h</span>
                </div>
                <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    value={hours} 
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                />
            </div>

            {/* Input 2 */}
            <div className="bg-slate-900/50 p-4 md:p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mb-4">
                    <label className="text-slate-300 font-medium text-sm md:text-base">What's your time worth? (hourly rate)</label>
                    <span className="text-white font-bold text-xl">${rate}/h</span>
                </div>
                <input 
                    type="range" 
                    min="20" 
                    max="1000" 
                    step="10"
                    value={rate} 
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
                />
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 transform translate-y-4"></div>
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-10 relative shadow-2xl backdrop-blur-xl">
                <h3 className="text-slate-400 font-medium uppercase tracking-wider mb-8 text-sm">Projected Annual Impact</h3>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white font-space tracking-tight">
                                {Math.round(hoursSavedPerYear).toLocaleString()} hrs
                            </div>
                            <div className="text-slate-500 mt-1">Time back for revenue-generating work</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white font-space tracking-tight">
                                ${Math.round(moneySavedPerYear).toLocaleString()}
                            </div>
                            <div className="text-slate-500 mt-1">Value of reclaimed time</div>
                        </div>
                    </div>

                     <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-6"></div>

                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-space tracking-tight">
                                ${Math.round(potentialRevenue).toLocaleString()}
                            </div>
                            <div className="text-slate-500 mt-1">Potential value if reinvested in sales/delivery*</div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-xs text-slate-600 font-medium">*Assumes you reinvest saved time into your highest-value business activities. Most clients report 2-3x ROI within 90 days.</p>
            </div>
        </div>

      </div>

      {/* Micro CTA */}
      <div className="mt-16 text-center relative z-10">
        <p className="text-slate-400 mb-6 text-lg">Ready to reclaim your time?</p>
        <a
          href="https://calendly.com/jonas-algowerk/30min-meeting-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
        >
          Schedule Free Audit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};