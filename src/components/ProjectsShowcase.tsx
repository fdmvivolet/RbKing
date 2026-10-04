import React, { useState } from 'react';
import { Layers, ArrowUpRight, Cpu, Database } from 'lucide-react';
import { Translations } from '../translations';

interface ProjectsShowcaseProps {
  t: Translations['projects'];
  onOpenWaitlist: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ t, onOpenWaitlist }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(t.items[0].id);

  const activeProject = t.items.find((p) => p.id === activeProjectId) || t.items[0];

  return (
    <section id="projects" className="py-28 border-b border-white/[0.08] bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 02.0 // EXHIBITION ]</span>
            <span className="text-zinc-600">/</span>
            <span>{t.badge}</span>
          </div>
          <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-2xl font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Sharp Project Selector Bar */}
        <div className="mt-12 flex flex-wrap border-b border-white/15 bg-transparent">
          {t.items.map((project, idx) => {
            const isSelected = project.id === activeProjectId;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={`px-6 py-3 text-xs font-mono tracking-wider uppercase transition-all duration-150 border-r border-white/10 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span className="mr-2 opacity-60">0{idx + 1}.</span>
                {project.title.split(':')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Project Monolithic Exhibition Frame */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/15">
          {/* Visual Showcase Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#070709] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            {/* Visual Canvas Backdrop */}
            <div className="border border-white/10 bg-[#050507] p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
              
              {/* Top status bar inside canvas */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-white animate-pulse" />
                  <span className="font-mono text-[11px] text-zinc-300 uppercase tracking-widest">
                    {activeProject.genre}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-white/10 border border-white/20 px-2.5 py-0.5">
                  Roblox Place Live
                </span>
              </div>

              {/* Graphic center stylized voxel & cloud visualizer */}
              <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  <div className="h-20 w-20 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 flex items-center justify-center shadow-2xl">
                    <Layers className="h-9 w-9 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-black border border-white/20 flex items-center justify-center">
                    <Cpu className="h-3 w-3 text-zinc-300" />
                  </div>
                </div>
                <h4 className="font-luxury text-2xl font-bold text-white tracking-wide">
                  {activeProject.title}
                </h4>
                <p className="mt-2 text-xs text-zinc-400 max-w-md font-light leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Canvas bottom tags */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
                {activeProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/[0.04] px-2.5 py-1 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Metrics Row */}
            <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">{t.peakCcu}</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums mt-1 block">
                  {activeProject.ccu}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">{t.serverFps}</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums mt-1 block">
                  {activeProject.fps}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">{t.monthlyVisits}</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-300 tabular-nums mt-1 block">
                  {activeProject.visits}
                </span>
              </div>
            </div>
          </div>

          {/* Deep-Dive Technical Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#050507] p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  {t.techPillars}
                </span>
                <h3 className="font-luxury text-xl font-bold text-white">
                  {activeProject.title}
                </h3>
              </div>

              {/* AI Role */}
              <div className="border border-white/10 bg-black/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-2">
                  <Cpu className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{t.aiRole}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {activeProject.aiContribution}
                </p>
              </div>

              {/* AWS & Analytics Role */}
              <div className="border border-white/10 bg-black/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-2">
                  <Database className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{t.analyticsRole}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {activeProject.analyticsContribution}
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Open Cloud Ready
              </span>
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-white hover:text-zinc-300 transition-colors"
              >
                <span>Deploy Blueprint</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
