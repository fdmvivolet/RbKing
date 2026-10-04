import React, { useState } from 'react';
import { Activity, Server, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import { PlaceTelemetry } from '../types';
import { Language, Translations } from '../translations';

interface InteractiveDashboardProps {
  t: Translations['monitoring'];
  lang: Language;
}

const DEMO_PLACES: PlaceTelemetry[] = [
  {
    id: 'place_1',
    name: 'CyberRealm: Neon Siege',
    genre: 'rpg',
    ccu: 185400,
    maxCcu: 220000,
    tickRate: 59.9,
    memoryMb: 1420,
    avgPingMs: 18.4,
    crashRatePercent: 0.008,
    awsRegion: 'eu-central-1 (Frankfurt)',
    status: 'healthy',
  },
  {
    id: 'place_2',
    name: 'Chrono Tycoon: Deep Space',
    genre: 'tycoon',
    ccu: 240100,
    maxCcu: 280000,
    tickRate: 60.0,
    memoryMb: 1890,
    avgPingMs: 22.1,
    crashRatePercent: 0.012,
    awsRegion: 'us-east-1 (N. Virginia)',
    status: 'healthy',
  },
  {
    id: 'place_3',
    name: 'Vortex Obby: Gravity Flux',
    genre: 'obby',
    ccu: 94800,
    maxCcu: 130000,
    tickRate: 59.8,
    memoryMb: 920,
    avgPingMs: 16.2,
    crashRatePercent: 0.004,
    awsRegion: 'ap-northeast-1 (Tokyo)',
    status: 'healthy',
  },
];

type MetricTab = 'ccu' | 'tickrate' | 'memory' | 'latency';

export const InteractiveDashboard: React.FC<InteractiveDashboardProps> = ({ t, lang }) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>('place_1');
  const [activeMetric, setActiveMetric] = useState<MetricTab>('ccu');

  const selectedPlace = DEMO_PLACES.find((p) => p.id === selectedPlaceId) || DEMO_PLACES[0];

  const getGraphPoints = () => {
    switch (activeMetric) {
      case 'ccu':
        return [
          { time: '14:00', value: selectedPlace.ccu * 0.88 },
          { time: '14:15', value: selectedPlace.ccu * 0.92 },
          { time: '14:30', value: selectedPlace.ccu * 0.95 },
          { time: '14:45', value: selectedPlace.ccu * 0.97 },
          { time: '15:00', value: selectedPlace.ccu },
          { time: '15:15', value: selectedPlace.ccu * 1.02 },
          { time: '15:30', value: selectedPlace.ccu * 1.01 },
        ];
      case 'tickrate':
        return [
          { time: '14:00', value: 59.8 },
          { time: '14:15', value: 60.0 },
          { time: '14:30', value: 59.9 },
          { time: '14:45', value: 60.0 },
          { time: '15:00', value: 59.9 },
          { time: '15:15', value: 60.0 },
          { time: '15:30', value: 59.9 },
        ];
      case 'memory':
        return [
          { time: '14:00', value: selectedPlace.memoryMb - 120 },
          { time: '14:15', value: selectedPlace.memoryMb - 80 },
          { time: '14:30', value: selectedPlace.memoryMb - 30 },
          { time: '14:45', value: selectedPlace.memoryMb + 10 },
          { time: '15:00', value: selectedPlace.memoryMb },
          { time: '15:15', value: selectedPlace.memoryMb - 40 },
          { time: '15:30', value: selectedPlace.memoryMb },
        ];
      case 'latency':
        return [
          { time: '14:00', value: selectedPlace.avgPingMs + 2.1 },
          { time: '14:15', value: selectedPlace.avgPingMs + 1.2 },
          { time: '14:30', value: selectedPlace.avgPingMs - 0.8 },
          { time: '14:45', value: selectedPlace.avgPingMs },
          { time: '15:00', value: selectedPlace.avgPingMs - 1.1 },
          { time: '15:15', value: selectedPlace.avgPingMs + 0.3 },
          { time: '15:30', value: selectedPlace.avgPingMs },
        ];
    }
  };

  const graphData = getGraphPoints();

  return (
    <section id="monitoring" className="py-28 border-b border-white/[0.08] bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="text-white font-bold">[ 06.0 // OBSERVABILITY ]</span>
              <span className="text-zinc-600">/</span>
              <span>{t.badge}</span>
            </div>
            <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              {t.title}
            </h2>
            <p className="mt-4 text-base text-zinc-400 font-light">
              {t.subtitle}
            </p>
          </div>

          {/* Place Selector Segment (Sharp) */}
          <div className="flex items-center border border-white/15 bg-transparent">
            {DEMO_PLACES.map((place, idx) => (
              <button
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all border-r border-white/10 ${
                  selectedPlaceId === place.id
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {place.name.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Top Metric Architectural Bays */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/15">
          <button
            onClick={() => setActiveMetric('ccu')}
            className={`text-left p-6 transition-all ${
              activeMetric === 'ccu'
                ? 'bg-white/[0.08] border-t-2 border-white'
                : 'bg-[#050507] hover:bg-[#08080c]'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
              <span>{t.ccuTab}</span>
              <TrendingUp className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {selectedPlace.ccu.toLocaleString('en-US')}
            </div>
            <div className="mt-1 text-[11px] font-mono text-zinc-500 uppercase">
              {t.peakDay} <span className="text-zinc-300">{selectedPlace.maxCcu.toLocaleString('en-US')}</span>
            </div>
          </button>

          <button
            onClick={() => setActiveMetric('tickrate')}
            className={`text-left p-6 transition-all ${
              activeMetric === 'tickrate'
                ? 'bg-white/[0.08] border-t-2 border-white'
                : 'bg-[#050507] hover:bg-[#08080c]'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
              <span>{t.tickRateTab}</span>
              <span className="text-[10px] text-zinc-500">Target 60.0</span>
            </div>
            <div className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {selectedPlace.tickRate} FPS
            </div>
            <div className="mt-1 text-[11px] font-mono text-zinc-500 uppercase">
              {t.stability}
            </div>
          </button>

          <button
            onClick={() => setActiveMetric('memory')}
            className={`text-left p-6 transition-all ${
              activeMetric === 'memory'
                ? 'bg-white/[0.08] border-t-2 border-white'
                : 'bg-[#050507] hover:bg-[#08080c]'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
              <span>{t.memoryTab}</span>
              <Server className="h-3.5 w-3.5 text-zinc-400" />
            </div>
            <div className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {selectedPlace.memoryMb} MB
            </div>
            <div className="mt-1 text-[11px] font-mono text-zinc-500 uppercase">
              {t.robloxLimit}
            </div>
          </button>

          <button
            onClick={() => setActiveMetric('latency')}
            className={`text-left p-6 transition-all ${
              activeMetric === 'latency'
                ? 'bg-white/[0.08] border-t-2 border-white'
                : 'bg-[#050507] hover:bg-[#08080c]'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
              <span>{t.latencyTab}</span>
              <Shield className="h-3.5 w-3.5 text-zinc-400" />
            </div>
            <div className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {selectedPlace.avgPingMs} ms
            </div>
            <div className="mt-1 text-[11px] font-mono text-zinc-500 uppercase">
              {t.route53}
            </div>
          </button>
        </div>

        {/* Telemetry Graph & Fleet Console */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/15 items-stretch">
          <div className="lg:col-span-8 bg-[#050507] p-8">
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-white flex items-center gap-2">
                  <span>Stream //</span>
                  <span className="text-zinc-400">
                    {activeMetric}
                  </span>
                </h3>
                <span className="text-xs font-mono text-zinc-500 mt-0.5 block">
                  Region: {selectedPlace.awsRegion}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 bg-white animate-pulse" />
                {t.telemetryStream}
              </div>
            </div>

            {/* Custom Architectural SVG line chart */}
            <div className="mt-8 h-60 w-full">
              <svg viewBox="0 0 700 200" className="w-full h-full overflow-visible">
                <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
                <line x1="0" y1="160" x2="700" y2="160" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />

                <defs>
                  <linearGradient id="monochromeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <polygon
                  points="50,140 150,110 250,85 350,70 450,55 550,45 650,50 650,180 50,180"
                  fill="url(#monochromeGradient)"
                />

                <polyline
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  points="50,140 150,110 250,85 350,70 450,55 550,45 650,50"
                />

                {[
                  { cx: 50, cy: 140 },
                  { cx: 150, cy: 110 },
                  { cx: 250, cy: 85 },
                  { cx: 350, cy: 70 },
                  { cx: 450, cy: 55 },
                  { cx: 550, cy: 45 },
                  { cx: 650, cy: 50 },
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.cx}
                    cy={pt.cy}
                    r="3.5"
                    className="fill-black stroke-white stroke-2"
                  />
                ))}
              </svg>

              <div className="flex justify-between text-[11px] font-mono text-zinc-600 pt-3 px-6">
                {graphData.map((d, i) => (
                  <span key={i}>{d.time}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-white" />
                {t.healingNotice}
              </span>
              <span>CloudWatch Synthetic</span>
            </div>
          </div>

          {/* Self-healing Event Stream */}
          <div className="lg:col-span-4 bg-[#070709] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-widest text-white flex items-center gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-white" />
                  {t.healingTitle}
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                <div className="border border-white/10 bg-black/60 p-4 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white uppercase tracking-wider">AUTO-SCALE TRIGGER</span>
                    <span className="text-[10px] text-zinc-600">2m ago</span>
                  </div>
                  <p className="mt-1.5 text-zinc-400 font-sans text-xs font-light leading-relaxed">
                    Surge detected (+18k CCU). Provisioned 4 additional AWS ECS shards dynamically.
                  </p>
                </div>

                <div className="border border-white/10 bg-black/60 p-4 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">LUAU GC SWEEP</span>
                    <span className="text-[10px] text-zinc-600">7m ago</span>
                  </div>
                  <p className="mt-1.5 text-zinc-400 font-sans text-xs font-light leading-relaxed">
                    Memory leak prevented in ragdoll loop: targeted GC executed without tick rate drops.
                  </p>
                </div>

                <div className="border border-white/10 bg-black/60 p-4 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white uppercase tracking-wider">DYNAMODB COMMITTED</span>
                    <span className="text-[10px] text-zinc-600">14m ago</span>
                  </div>
                  <p className="mt-1.5 text-zinc-400 font-sans text-xs font-light leading-relaxed">
                    Batched save for 150,000 player inventories finished in 38ms with zero data loss.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-white uppercase tracking-wider">{t.cpuSavings}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
