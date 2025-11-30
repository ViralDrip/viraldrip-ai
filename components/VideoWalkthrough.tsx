import React from 'react';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

export const VideoWalkthrough: React.FC = () => {
  return (
    <section id="demo" className="py-32 md:py-40 bg-slate-950 relative flex items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
                <Play className="w-4 h-4" />
                <span>System Walkthrough</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Pipeline in Action</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Watch how the CRM pipeline streamlines your entire content workflow—from AI research to final approval.
            </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
            {/* Video will go here - for now showing a placeholder */}
            <div className="aspect-video bg-slate-950 relative group">
                {/* Placeholder for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform cursor-pointer">
                            <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p className="text-slate-400 text-sm">
                          Video walkthrough coming soon
                        </p>
                        <p className="text-slate-600 text-xs mt-2">
                          Replace this with your Loom/YouTube embed
                        </p>
                    </div>
                </div>

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
        </div>

        {/* Key Features Below Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">AI Research</h4>
                    <p className="text-slate-400 text-sm">See how AI finds trending topics in your niche</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Approval Workflow</h4>
                    <p className="text-slate-400 text-sm">Watch the review and approval process in action</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Multi-Platform Repurposing</h4>
                    <p className="text-slate-400 text-sm">One video becomes 10+ assets across platforms</p>
                </div>
            </div>
        </div>

        {/* Micro CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6 text-lg">Want to see how this could work for your business?</p>
          <a
            href="https://calendly.com/jonas-algowerk/30min-meeting-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
