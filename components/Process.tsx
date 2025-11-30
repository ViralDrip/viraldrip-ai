import React from 'react';
import { motion } from 'framer-motion';
import { Target, Hammer, GraduationCap, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const timelineSteps = [
  {
    week: 'Week 1',
    title: 'Strategy & Discovery',
    icon: Target,
    color: 'blue',
    items: [
      'Audit your current content workflow',
      'Map business goals and target audience',
      'Identify bottlenecks and time-wasters',
      'Design custom pipeline stages'
    ]
  },
  {
    week: 'Week 2',
    title: 'Build & Integration',
    icon: Hammer,
    color: 'purple',
    items: [
      'Build pipeline in your CRM or set up new one',
      'Integrate AI research agents',
      'Create approval workflows',
      'Test with sample content'
    ]
  },
  {
    week: 'Week 3',
    title: 'Training & Handoff',
    icon: GraduationCap,
    color: 'pink',
    items: [
      'Walk through complete workflow',
      'Show approve, reject, and refine',
      'Set up team access if needed',
      'Make final adjustments'
    ]
  },
  {
    week: 'Ongoing',
    title: 'System Runs',
    icon: Rocket,
    color: 'green',
    items: [
      'AI populates pipeline with topics',
      'Scripts drafted for review',
      'You approve from dashboard',
      'Content repurposed automatically'
    ]
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
      gradient: 'from-blue-500 to-blue-600'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
      gradient: 'from-purple-500 to-purple-600'
    },
    pink: {
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      glow: 'shadow-pink-500/20',
      gradient: 'from-pink-500 to-pink-600'
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      glow: 'shadow-green-500/20',
      gradient: 'from-green-500 to-green-600'
    }
  };
  return colors[color as keyof typeof colors];
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 lg:py-40 bg-slate-950 relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4" />
            <span>Implementation Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Pipeline Gets Built</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From discovery to deployment in 3 weeks. Then your system runs on autopilot.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const colors = getColorClasses(step.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Connector Line (hidden on last item) */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1.5rem)] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0"></div>
                )}

                {/* Card */}
                <div className={`relative bg-slate-900/60 backdrop-blur-sm border ${colors.border} rounded-2xl p-4 md:p-6 md:hover:scale-105 transition-all duration-300 ${colors.glow} hover:shadow-2xl`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Week Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} border ${colors.border} mb-2`}>
                    <span className={`text-xs font-bold ${colors.text}`}>{step.week}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow indicator for ongoing */}
                  {index === timelineSteps.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span>Continuous Operation</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 px-4 md:px-8 py-6 md:py-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="text-center lg:text-left">
              <p className="text-sm text-slate-400 mb-1">Average Time to First Content</p>
              <p className="text-2xl font-bold text-white">21 Days</p>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="w-full lg:w-auto h-px lg:h-auto bg-white/10 lg:hidden"></div>
            <div className="text-center lg:text-left">
              <p className="text-sm text-slate-400 mb-1">Client Success Rate</p>
              <p className="text-2xl font-bold text-white">100%</p>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="w-full lg:w-auto h-px lg:h-auto bg-white/10 lg:hidden"></div>
            <a
              href="#book"
              className="w-full lg:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Start Your Pipeline
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
