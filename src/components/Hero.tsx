import React, { useState, useEffect } from 'react';
import { ArrowRight, Server, Cpu, Play, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Translations } from '../translations';

interface HeroProps {
  t: Translations['hero'];
  onOpenWaitlist: () => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenWaitlist, onExploreDemo }) => {
  const [liveCcu, setLiveCcu] = useState(148720);
  const [tickRate, setTickRate] = useState(59.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCcu((prev) => prev + Math.floor(Math.random() * 41) - 20);
      setTickRate(Number((59.8 + Math.random() * 0.3).toFixed(1)));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Architectural Kicker with technical index */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-zinc-400 mb-8 uppercase">
          <span className="text-white font-bold">[ 01.0 // ARCHITECTURE ]</span>
          <span className="text-zinc-600">/</span>
          <span>{t.trustBadge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="font-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] text-balance">
                {t.titleStart}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 italic font-normal">
                  {t.titleHighlight}
                </span>
                {t.titleEnd}
              </h1>

              <p className="mt-8 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl font-light">
                {t.description}
              </p>

              {/* Sharp Architectural Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-2 border border-white bg-white px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 active:scale-[0.99] whitespace-nowrap shadow-xl"
                >
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={onExploreDemo}
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.02] px-6 py-3.5 text-xs font-mono uppercase tracking-wider text-zinc-300 transition-colors hover:border-white hover:text-white active:scale-[0.99] whitespace-nowrap backdrop-blur-xl"
                >
                  <Play className="h-3 w-3 fill-zinc-300" />
                  <span>{t.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Architectural Metrics Panel */}
            <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6">
              <div className="border-l border-white/15 pl-4">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {t.metric1Val}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  {t.metric1Label}
                </div>
              </div>
              <div className="border-l border-white/15 pl-4">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-zinc-200 tabular-nums">
                  {t.metric2Val}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  {t.metric2Label}
                </div>
              </div>
              <div className="border-l border-white/15 pl-4">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {t.metric3Val}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  {t.metric3Label}
                </div>
              </div>
            </div>
          </div>

          {/* Monolithic Telemetry Console Frame (5 cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full border border-white/15 bg-[#070709] p-6 sm:p-7 shadow-2xl flex flex-col justify-between relative">
              {/* Precision Corner Crosshair Accent */}
              <div className="absolute -top-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -top-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>

              {/* Console Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white animate-pulse" />
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-zinc-300 uppercase">
                      {t.liveRuntime}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
                    eu-central-1 // 60hz
                  </span>
                </div>

                {/* Monolithic Place Card */}
                <div className="border border-white/10 bg-black/60 p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-luxury text-base font-bold text-white tracking-wide">
                        CyberRealm: Neon Siege
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                        <span>Tactical Sci-Fi RPG</span>
                        <span aria-hidden="true" className="text-zinc-600">/</span>
                        <span>v2.14.8 Live</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-white/10 text-white border border-white/20">
                      {t.activeStatus}
                    </span>
                  </div>

                  {/* Sharp Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-[#070709] p-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.ccuLabel}</span>
                      <span className="font-mono text-lg font-bold text-white tabular-nums mt-1 block">
                        {liveCcu.toLocaleString('en-US')}
                      </span>
                    </div>

                    <div className="bg-[#070709] p-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.tickRateLabel}</span>
                      <span className="font-mono text-lg font-bold text-white tabular-nums mt-1 block">
                        {tickRate} FPS
                      </span>
                    </div>

                    <div className="bg-[#070709] p-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.pingLabel}</span>
                      <span className="font-mono text-lg font-bold text-zinc-300 tabular-nums mt-1 block">
                        19.2 ms
                      </span>
                    </div>

                    <div className="bg-[#070709] p-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.crashRateLabel}</span>
                      <span className="font-mono text-lg font-bold text-white tabular-nums mt-1 block">
                        0.012%
                      </span>
                    </div>
                  </div>

                  {/* Machine Status Rows */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                        <Cpu className="h-3 w-3 text-zinc-400" />
                        {t.luauSync}
                      </span>
                      <span className="font-mono text-[11px] text-white">100% Synced</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                        <Server className="h-3 w-3 text-zinc-400" />
                        {t.awsStack}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">12 shards</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                        {t.openCloudDeploy}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">Auto-deploy OK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frame Footer */}
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />
                  {t.awsVerified}
                </span>
                <span className="text-zinc-600">Tier-3 HA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
