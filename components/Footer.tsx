import React from 'react';
import { Droplets } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/20">
             <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-space tracking-tight text-white">
            Viral<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Drip</span>.ai
          </span>
        </div>
        <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} ViralDrip.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};