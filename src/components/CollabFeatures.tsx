import React from 'react';
import { Users, GitMerge, Radio, Sparkles } from 'lucide-react';
import { Language } from '../translations';

interface CollabFeaturesProps {
  lang: Language;
}

export const CollabFeatures: React.FC<CollabFeaturesProps> = ({ lang }) => {
  return (
    <section className="py-28 border-b border-white/[0.08] bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 08.0 // COLLABORATION ]</span>
            <span className="text-zinc-600">/</span>
            <span>{lang === 'en' ? 'Netcode Engine' : 'Мрежов Код'}</span>
          </div>
          <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {lang === 'en'
              ? 'Real-Time Multi-Creator Collaboration & Netcode'
              : 'Съвместна Разработка в Реално Време и Мрежов Код'}
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed font-light">
            {lang === 'en'
              ? 'Build places together across your entire studio team. RbKing prevents overwrite collisions in Roblox Studio, synchronizes assets, and provides a turnkey cross-server networking engine.'
              : 'Разработвайте плейсове заедно с целия екип. RbKing предотвратява конфликти в Roblox Studio, синхронизира активите и предоставя готов междусървърен мрежов двигател.'}
          </p>
        </div>

        {/* Sharp Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15">
          <div className="bg-[#050507] p-8 flex flex-col justify-between hover:bg-[#07070a] transition-colors">
            <div>
              <div className="h-10 w-10 border border-white/15 bg-white/[0.02] flex items-center justify-center text-white mb-6">
                <GitMerge className="h-4 w-4" />
              </div>
              <h3 className="font-luxury text-base font-bold text-white tracking-wide">
                {lang === 'en' ? 'Smart Merge for Studio' : 'Smart Merge за Studio'}
              </h3>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-light">
                {lang === 'en'
                  ? 'Automated collision resolution when level designers and scripters simultaneously modify the same scene. Zero lost changes.'
                  : 'Автоматично разрешаване на конфликти при паралелна работа по една и съща сцена от дизайнери и програмисти.'}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-300">
              ✔ Explorer Tree Safe
            </div>
          </div>

          <div className="bg-[#050507] p-8 flex flex-col justify-between hover:bg-[#07070a] transition-colors">
            <div>
              <div className="h-10 w-10 border border-white/15 bg-white/[0.02] flex items-center justify-center text-white mb-6">
                <Radio className="h-4 w-4" />
              </div>
              <h3 className="font-luxury text-base font-bold text-white tracking-wide">
                {lang === 'en' ? 'Cross-Server Networking' : 'Крос-Сървърен Мултиплейър'}
              </h3>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-light">
                {lang === 'en'
                  ? 'Connect thousands of servers into a unified metaverse. Players travel between sub-places with instant inventory and guild state persistence.'
                  : 'Свързвайте хиляди сървъри в обща метавселена. Играчите пътуват между светове с мигновен пренос на инвентар.'}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-300">
              ✔ AWS ElastiCache Broker
            </div>
          </div>

          <div className="bg-[#050507] p-8 flex flex-col justify-between hover:bg-[#07070a] transition-colors">
            <div>
              <div className="h-10 w-10 border border-white/15 bg-white/[0.02] flex items-center justify-center text-white mb-6">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="font-luxury text-base font-bold text-white tracking-wide">
                {lang === 'en' ? 'AI Pair Code Review' : 'ИИ Асистент за Код Ревю'}
              </h3>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-light">
                {lang === 'en'
                  ? 'Real-time neural analysis inspecting Luau loops for memory leaks, missing server validations, and exploit vulnerabilities.'
                  : 'Невронен анализ на Luau скриптове за течове на памет, липсващи проверки на сървъра и уязвимости от експлойти.'}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-300">
              ✔ Zero Exploit Guarantee
            </div>
          </div>
        </div>

        {/* Live Workspace Monolithic Bar */}
        <div className="mt-8 border border-white/15 bg-[#050507] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                {lang === 'en' ? 'Active Session // ' : 'Активна сесия // '}
              </span>
              <span className="font-luxury text-sm font-bold text-white tracking-wide">
                "CyberRealm Studio Alpha"
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 bg-white animate-pulse" />
              <span>{lang === 'en' ? '3 creators active' : '3 създатели онлайн'}</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-[#070709] p-4">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">Alex (Scripter)</span>
                <span className="font-mono text-[10px] text-white">Sync OK</span>
              </div>
              <p className="mt-1.5 text-zinc-400 font-mono text-[11px]">
                ServerScriptService.Economy
              </p>
            </div>

            <div className="bg-[#070709] p-4">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">Elena (Level)</span>
                <span className="font-mono text-[10px] text-white">Sync OK</span>
              </div>
              <p className="mt-1.5 text-zinc-400 font-mono text-[11px]">
                Workspace.Sector_B (120 parts)
              </p>
            </div>

            <div className="bg-[#070709] p-4">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">David (AI Pipeline)</span>
                <span className="font-mono text-[10px] text-white">Sync OK</span>
              </div>
              <p className="mt-1.5 text-zinc-400 font-mono text-[11px]">
                NPC_Behavior_Tree_v4
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
