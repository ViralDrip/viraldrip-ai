import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { GeneratedStrategy, LoadingState } from '../types';
import { Loader2, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const Demo: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<GeneratedStrategy | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;

    setStatus(LoadingState.LOADING);
    setError('');
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a mini content strategy for a creator in the "${niche}" niche focusing on "${platform}".
                   Provide 3 content pillars (categories), 3 viral hook examples, and a 1-sentence recommended schedule.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              niche: { type: Type.STRING },
              pillars: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              hooks: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              schedule: { type: Type.STRING }
            },
            required: ["niche", "pillars", "hooks", "schedule"]
          }
        }
      });

      if (response.text) {
        const data = JSON.parse(response.text) as GeneratedStrategy;
        setResult(data);
        setStatus(LoadingState.SUCCESS);
      } else {
        throw new Error("No data returned");
      }

    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="demo" className="py-40 bg-slate-950 relative flex items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See How the Pipeline Works</h2>
            <p className="text-slate-400">Enter your business focus. See how AI populates your content pipeline—ready for your review.</p>
        </div>

        <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-1 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="grid md:grid-cols-2">
                
                {/* Left: Input */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Live AI Demo</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">Input Parameters</h2>

                    <form onSubmit={handleGenerate} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Your Business / Industry</label>
                            <input
                                type="text"
                                value={niche}
                                onChange={(e) => setNiche(e.target.value)}
                                placeholder="e.g. B2B SaaS, Management Consulting, E-commerce Tools..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-600 text-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Primary Platform</label>
                            <div className="relative">
                                <select 
                                    value={platform}
                                    onChange={(e) => setPlatform(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none text-lg"
                                >
                                    <option>Instagram</option>
                                    <option>TikTok</option>
                                    <option>YouTube Shorts</option>
                                    <option>LinkedIn</option>
                                    <option>Twitter/X</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={status === LoadingState.LOADING}
                            className="w-full bg-white hover:bg-slate-100 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4 text-lg"
                        >
                            {status === LoadingState.LOADING ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Constructing Strategy...
                                </>
                            ) : (
                                <>
                                    Generate Pipeline Preview
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    </form>
                </div>

                {/* Right: Output */}
                <div className="bg-slate-950/30 p-8 md:p-12 min-h-[500px] flex flex-col relative">
                    {!result && status !== LoadingState.LOADING && (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-600">
                            <Sparkles className="w-16 h-16 mb-6 opacity-20" />
                            <p className="text-lg">Waiting for input...</p>
                        </div>
                    )}

                    {status === LoadingState.LOADING && (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-6">
                           <div className="relative w-20 h-20">
                               <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                               <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                           </div>
                           <div className="text-center space-y-2">
                               <p className="font-mono text-blue-400">ANALYZING_MARKET_TRENDS...</p>
                               <p className="font-mono text-purple-400">EXTRACTING_VIRAL_HOOKS...</p>
                           </div>
                        </div>
                    )}

                    {result && status === LoadingState.SUCCESS && (
                        <div className="space-y-8 animate-fadeIn h-full overflow-y-auto custom-scrollbar">
                             <div>
                                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Strategic Pillars</h3>
                                <div className="flex flex-wrap gap-3">
                                    {result.pillars.map((pillar, idx) => (
                                        <span key={idx} className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-medium">
                                            {pillar}
                                        </span>
                                    ))}
                                </div>
                             </div>

                             <div>
                                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Viral Hook Concepts</h3>
                                <ul className="space-y-4">
                                    {result.hooks.map((hook, idx) => (
                                        <li key={idx} className="group flex gap-4 text-slate-300 text-sm bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">{idx + 1}</span>
                                            <span className="italic">"{hook}"</span>
                                        </li>
                                    ))}
                                </ul>
                             </div>

                             <div className="pt-4 border-t border-white/5">
                                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Execution Plan</h3>
                                <div className="flex items-start gap-3 text-green-400 text-sm p-4 bg-green-900/10 border border-green-500/20 rounded-xl">
                                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                                    {result.schedule}
                                </div>
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};