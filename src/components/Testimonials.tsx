import React from 'react';
import { Building2 } from 'lucide-react';
import { Translations } from '../translations';

interface TestimonialsProps {
  t: Translations['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section id="testimonials" className="py-28 border-b border-white/[0.08] bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 09.0 // TESTIMONIALS ]</span>
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

        {/* Monolithic Testimonials Grid (Contiguous Panels) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#050507] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#08080c] transition-colors relative"
            >
              {/* Stat highlight header */}
              <div>
                <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-5 mb-8">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {item.stat}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    {item.statLabel}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author attribution */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-luxury text-base font-bold text-white tracking-wide">
                    {item.author}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                    {item.role} <span className="text-zinc-600">//</span> <span className="text-zinc-200">{item.studio}</span>
                  </div>
                </div>

                <div className="h-8 w-8 border border-white/15 bg-white/[0.02] flex items-center justify-center text-zinc-400">
                  <Building2 className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
