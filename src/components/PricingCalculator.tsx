import React, { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Language, Translations } from '../translations';

interface PricingCalculatorProps {
  t: Translations['pricing'];
  lang: Language;
  onSelectPlan: (planName: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ t, lang, onSelectPlan }) => {
  const [ccu, setCcu] = useState(15000);
  const [monthlyVisits, setMonthlyVisits] = useState(2500000);

  const estimatedAwsCompute = Math.round(ccu * 0.008 * 30);
  const estimatedDataStoreOps = Math.round((monthlyVisits * 4) / 1000000);
  const estimatedBaseCost = Math.max(0, Math.round(ccu * 0.012 + (monthlyVisits / 1000000) * 14));

  return (
    <section id="pricing" className="py-28 border-b border-white/[0.08] bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 10.0 // UNIT ECONOMICS ]</span>
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

        {/* Monolithic Calculator Frame */}
        <div className="mt-14 border border-white/15 bg-[#050507] p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="font-luxury text-xl font-bold text-white tracking-wide">
                {t.calcTitle}
              </h3>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
                {t.calcSubtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 border border-white/20 bg-white/[0.03] px-4 py-2 text-xs font-mono uppercase tracking-wider text-white">
              <ShieldCheck className="h-4 w-4 text-white" />
              {t.awsGrantCover}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
                  <span>{t.ccuSlider}</span>
                  <span className="text-white font-bold text-sm">
                    {ccu.toLocaleString('en-US')} CCU
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={ccu}
                  onChange={(e) => setCcu(Number(e.target.value))}
                  className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2 uppercase tracking-wider">
                  <span>1,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
                  <span>{t.visitsSlider}</span>
                  <span className="text-white font-bold text-sm">
                    {(monthlyVisits / 1000000).toFixed(1)}M
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2 uppercase tracking-wider">
                  <span>500k</span>
                  <span>25M</span>
                  <span>50M+</span>
                </div>
              </div>

              {/* Technical Breakdown */}
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="p-4 bg-[#070709]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.computeHours}</span>
                  <span className="font-mono font-bold text-white text-sm mt-1 block">
                    ~{estimatedAwsCompute.toLocaleString('en-US')} hrs/mo
                  </span>
                </div>
                <div className="p-4 bg-[#070709]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.openCloudCalls}</span>
                  <span className="font-mono font-bold text-white text-sm mt-1 block">
                    ~{estimatedDataStoreOps}M requests
                  </span>
                </div>
              </div>
            </div>

            {/* Calculated Estimate Box (5 cols) */}
            <div className="lg:col-span-5 bg-[#070709] border border-white/15 p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
                  {t.estCost}
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                    ${estimatedBaseCost}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t.perMonth}</span>
                </div>

                <div className="mt-6 space-y-3 text-xs text-zinc-300 font-light border-t border-white/[0.08] pt-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-white shrink-0" />
                    <span>{t.autoScale}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-white shrink-0" />
                    <span>{t.zeroIdle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-white shrink-0" />
                    <span>{t.batchTransfer}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <button
                  onClick={() => onSelectPlan('Calculator Estimate')}
                  className="w-full border border-white bg-white py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-colors hover:bg-zinc-200"
                >
                  {t.requestQuote}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Grid (Monolithic Blocks) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15 items-stretch">
          {/* Tier 1 */}
          <div className="bg-[#050507] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="font-luxury text-lg font-bold text-white tracking-wide">{t.tiers.indieTitle}</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">{t.tiers.indieCcu}</span>
              </div>
              <p className="mt-4 text-xs text-zinc-400 font-light leading-relaxed">
                {t.tiers.indieDesc}
              </p>
              <div className="mt-8 font-mono text-3xl font-extrabold text-white">
                {t.tiers.indiePrice}
                <span className="text-xs font-normal text-zinc-500 ml-2 uppercase font-mono">{t.tiers.indiePeriod}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan(t.tiers.indieTitle)}
              className="mt-10 w-full border border-white/20 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
            >
              {t.selectPlan}
            </button>
          </div>

          {/* Tier 2 - Marquee Architectural */}
          <div className="bg-[#070709] border-t-2 sm:border-t-0 sm:border-l-2 sm:border-r-2 border-white p-8 sm:p-10 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute top-0 right-0 bg-white px-3 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest text-black">
              {t.tiers.popularBadge}
            </div>
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="font-luxury text-lg font-bold text-white tracking-wide">{t.tiers.proTitle}</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">{t.tiers.proCcu}</span>
              </div>
              <p className="mt-4 text-xs text-zinc-300 font-light leading-relaxed">
                {t.tiers.proDesc}
              </p>
              <div className="mt-8 font-mono text-3xl font-extrabold text-white">
                {t.tiers.proPrice}
                <span className="text-xs font-normal text-zinc-400 ml-2 uppercase font-mono">{t.tiers.proPeriod}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan(t.tiers.proTitle)}
              className="mt-10 w-full border border-white bg-white py-3 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-zinc-200 transition-colors"
            >
              {t.selectPlan}
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-[#050507] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="font-luxury text-lg font-bold text-white tracking-wide">{t.tiers.entTitle}</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">{t.tiers.entCcu}</span>
              </div>
              <p className="mt-4 text-xs text-zinc-400 font-light leading-relaxed">
                {t.tiers.entDesc}
              </p>
              <div className="mt-8 font-mono text-3xl font-extrabold text-white">
                {t.tiers.entPrice}
                <span className="text-xs font-normal text-zinc-500 ml-2 uppercase font-mono">{t.tiers.entPeriod}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan(t.tiers.entTitle)}
              className="mt-10 w-full border border-white/20 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
            >
              {t.selectPlan}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
