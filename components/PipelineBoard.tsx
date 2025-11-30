import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, FileText, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react';

interface PipelineCard {
  title: string;
  stage: 'research' | 'draft' | 'review' | 'approved';
  status?: 'pending' | 'ready' | 'approved';
  type?: 'topic' | 'script' | 'thumbnail' | 'post';
}

interface PipelineBoardProps {
  cards?: PipelineCard[];
  showActions?: boolean;
  compact?: boolean;
}

const defaultCards: PipelineCard[] = [
  { title: 'AI Wrappers Trend', stage: 'research', status: 'ready', type: 'topic' },
  { title: 'SaaS Pricing', stage: 'research', status: 'pending', type: 'topic' },
  { title: 'Script: AI Wrappers', stage: 'draft', status: 'ready', type: 'script' },
  { title: 'Thumbnail Concept A', stage: 'review', status: 'ready', type: 'thumbnail' },
  { title: 'LinkedIn Post', stage: 'review', status: 'ready', type: 'post' },
  { title: 'Video: AI Wrappers', stage: 'approved', status: 'approved', type: 'script' },
];

const stageConfig = {
  research: {
    title: 'Research',
    color: 'blue',
    icon: Circle,
    gradient: 'from-blue-500/10 to-blue-600/5'
  },
  draft: {
    title: 'Drafting',
    color: 'purple',
    icon: FileText,
    gradient: 'from-purple-500/10 to-purple-600/5'
  },
  review: {
    title: 'Review Queue',
    color: 'yellow',
    icon: Clock,
    gradient: 'from-yellow-500/10 to-yellow-600/5'
  },
  approved: {
    title: 'Approved',
    color: 'green',
    icon: CheckCircle2,
    gradient: 'from-green-500/10 to-green-600/5'
  }
};

const getCardColor = (type?: string) => {
  switch (type) {
    case 'topic': return 'border-blue-500/30 bg-blue-500/5';
    case 'script': return 'border-purple-500/30 bg-purple-500/5';
    case 'thumbnail': return 'border-pink-500/30 bg-pink-500/5';
    case 'post': return 'border-green-500/30 bg-green-500/5';
    default: return 'border-white/10 bg-slate-800/50';
  }
};

export const PipelineBoard: React.FC<PipelineBoardProps> = ({
  cards = defaultCards,
  showActions = false,
  compact = false
}) => {
  const stages = ['research', 'draft', 'review', 'approved'] as const;

  return (
    <div className={`w-full ${compact ? 'max-w-4xl' : 'max-w-6xl'} mx-auto`}>
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 ${compact ? 'lg:gap-3' : 'lg:gap-4'}`}>
        {stages.map((stage) => {
          const config = stageConfig[stage];
          const stageCards = cards.filter(card => card.stage === stage);
          const Icon = config.icon;

          return (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stages.indexOf(stage) * 0.1 }}
              className={`rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-3 ${compact ? 'p-3' : 'p-4'} relative overflow-hidden`}
            >
              {/* Column Header */}
              <div className="mb-3 flex items-center gap-2">
                <div className={`w-6 h-6 rounded-lg bg-${config.color}-500/10 flex items-center justify-center`}>
                  <Icon className={`w-3.5 h-3.5 text-${config.color}-400`} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold text-white`}>{config.title}</h4>
                  <p className="text-[10px] text-slate-500">{stageCards.length} items</p>
                </div>
              </div>

              {/* Cards in this stage */}
              <div className="space-y-2">
                {stageCards.map((card, idx) => (
                  <motion.div
                    key={`${card.title}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className={`p-2.5 rounded-lg border ${getCardColor(card.type)} backdrop-blur-sm group hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white truncate">{card.title}</p>
                        {card.type && (
                          <span className="text-[10px] text-slate-400 capitalize">{card.type}</span>
                        )}
                      </div>
                      {card.status === 'ready' && (
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0 mt-1"></div>
                      )}
                    </div>

                    {/* Action buttons for Review stage */}
                    {showActions && stage === 'review' && (
                      <div className="flex gap-1.5 mt-2 pt-2 border-t border-white/5">
                        <button className="flex-1 px-2 py-1 rounded bg-green-500/10 hover:bg-green-500/20 transition-colors flex items-center justify-center gap-1">
                          <ThumbsUp className="w-3 h-3 text-green-400" />
                          <span className="text-[10px] text-green-300 font-medium">Approve</span>
                        </button>
                        <button className="px-2 py-1 rounded bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors flex items-center justify-center">
                          <RefreshCw className="w-3 h-3 text-yellow-400" />
                        </button>
                        <button className="px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors flex items-center justify-center">
                          <ThumbsDown className="w-3 h-3 text-red-400" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend/Instructions */}
      {showActions && (
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span>Ready for review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5 text-green-400" />
            <span>Approve</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-yellow-400" />
            <span>Revise</span>
          </div>
        </div>
      )}
    </div>
  );
};
