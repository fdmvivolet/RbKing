import React from 'react';
import { Cpu, Cloud, Activity, GitBranch, Users, DollarSign, ArrowUpRight } from 'lucide-react';
import { Translations } from '../translations';

interface FeatureHighlightsProps {
  t: Translations['features'];
  onLearnMore: (anchor: string) => void;
}

export const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ t, onLearnMore }) => {
  const icons = [
    <Cpu className="h-4 w-4 text-white" />,
    <Cloud className="h-4 w-4 text-zinc-300" />,
    <Activity className="h-4 w-4 text-white" />,
    <GitBranch className="h-4 w-4 text-zinc-300" />,
    <Users className="h-4 w-4 text-white" />,
    <DollarSign className="h-4 w-4 text-zinc-300" />,
  ];

  const anchors = [
    'ai-engine',
    'aws-cloud',
    'monitoring',
    'monitoring',
    'ai-engine',
    'pricing',
  ];

  return (
    <section id="features" className="py-28 border-b border-white/[0.08] bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 03.0 // CAPABILITIES ]</span>
            <span className="text-zinc-600">/</span>
            <span>{t.badge}</span>
          </div>
          <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Monolithic Architectural Grid (Border-Contiguous) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/15">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#050507] p-8 flex flex-col justify-between hover:bg-[#08080c] transition-colors group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="h-10 w-10 border border-white/15 bg-white/[0.02] flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-xs text-zinc-600">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-luxury text-lg font-bold text-white tracking-wide">
                  {card.title}
                </h3>
                <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              <div className="mt-10 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-300 font-medium tracking-wider text-[11px] uppercase">
                  {card.metric}
                </span>
                <button
                  onClick={() => onLearnMore(anchors[idx])}
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors font-mono text-[11px] uppercase tracking-wider"
                >
                  {t.learnMore} <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
