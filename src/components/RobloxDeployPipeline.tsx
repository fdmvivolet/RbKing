import React, { useState } from 'react';
import { UploadCloud, CheckCircle, RefreshCw, Terminal, Play } from 'lucide-react';
import { Language } from '../translations';

interface RobloxDeployPipelineProps {
  lang: Language;
}

export const RobloxDeployPipeline: React.FC<RobloxDeployPipelineProps> = ({ lang }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(4);

  const stepsEn = [
    { title: '1. Git Push / Merge Trigger', desc: 'Automated webhook triggers AWS CodePipeline' },
    { title: '2. AI Mesh & Luau Static Validation', desc: 'Polygon decimation, texture compression & typing audit' },
    { title: '3. Roblox Open Cloud API: Batch Upload', desc: 'Secure asset authorization via KMS Secrets Manager' },
    { title: '4. Zero-Downtime Place Publish', desc: 'Live version switchover without kicking active players' },
    { title: '5. Automated Canary Healthcheck', desc: 'Automatic 3-second rollback if server FPS dips below 55' },
  ];

  const stepsBg = [
    { title: '1. Git Push / Merge Тригер', desc: 'Автоматичен webhook стартира AWS CodePipeline' },
    { title: '2. ИИ Оптимизация на Мешове и Luau', desc: 'Компресиране на текстури и одит на скриптовете' },
    { title: '3. Roblox Open Cloud API Пакетно Качване', desc: 'Сигурна авторизация чрез KMS Secrets Manager' },
    { title: '4. Zero-Downtime Публикуване на Плейса', desc: 'Превключване на версии без изключване на играчи' },
    { title: '5. Автоматична Проверка на Здравето', desc: 'Автоматичен откат за 3 сек при спад под 55 FPS' },
  ];

  const steps = lang === 'en' ? stepsEn : stepsBg;

  const handleSimulateDeploy = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);

    const timeouts = [600, 1200, 1800, 2400, 3000];
    timeouts.forEach((time, idx) => {
      setTimeout(() => {
        setCurrentStepIndex(idx);
        if (idx === timeouts.length - 1) {
          setIsRunning(false);
        }
      }, time);
    });
  };

  return (
    <section className="py-28 border-b border-white/[0.08] bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 07.0 // AUTOMATION ]</span>
            <span className="text-zinc-600">/</span>
            <span>{lang === 'en' ? 'CI/CD Engine' : 'CI/CD Пайплайн'}</span>
          </div>
          <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {lang === 'en'
              ? 'Automated Deployment via Roblox Open Cloud API'
              : 'Автоматизиран Деплой чрез Roblox Open Cloud API'}
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed font-light">
            {lang === 'en'
              ? 'Eliminate manual publishes from Roblox Studio. Our CI/CD pipeline validates Luau code, optimizes geometry, and delivers updates with instant 3-second rollback.'
              : 'Край на ръчното качване от Roblox Studio. Вашият CI/CD пайплайн валидира кода, оптимизира геометрията и обновява плейса с мигновен 3-секунден откат.'}
          </p>
        </div>

        {/* Monolithic Pipeline Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/15 items-stretch">
          {/* Step Sequence Rail (6 cols) */}
          <div className="lg:col-span-6 bg-[#050507] p-8 flex flex-col justify-between">
            <div className="space-y-2">
              {steps.map((step, idx) => {
                const isPassed = currentStepIndex >= idx;
                const isCurrent = currentStepIndex === idx && isRunning;
                return (
                  <div
                    key={idx}
                    className={`p-4 border transition-all flex items-start gap-4 ${
                      isCurrent
                        ? 'bg-white/[0.08] border-white'
                        : isPassed
                        ? 'bg-black/40 border-white/10'
                        : 'bg-black/20 border-white/[0.04] opacity-40'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isCurrent ? (
                        <RefreshCw className="h-4 w-4 text-white animate-spin" />
                      ) : isPassed ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : (
                        <div className="h-4 w-4 border border-white/20" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-xs font-mono uppercase tracking-wider ${isPassed ? 'text-white font-bold' : 'text-zinc-500'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <button
                onClick={handleSimulateDeploy}
                disabled={isRunning}
                className="w-full inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 active:scale-[0.99] disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>{lang === 'en' ? 'Deploying to Open Cloud...' : 'Деплойване към Open Cloud...'}</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-black" />
                    <span>{lang === 'en' ? 'Trigger Automated Deployment' : 'Стартиране на тестов деплой'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Console (6 cols) */}
          <div className="lg:col-span-6 bg-[#070709] flex flex-col justify-between">
            <div className="bg-white/[0.02] px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-white" />
                <span className="font-mono text-xs text-zinc-300">
                  rbking-cli // open-cloud-pipeline
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-white">
                ● Live Connected
              </span>
            </div>

            <div className="p-6 font-mono text-xs leading-relaxed space-y-2 text-zinc-400 min-h-[380px] bg-[#070709]">
              <div className="text-zinc-600">
                [00:00.00] Initializing Roblox Open Cloud v2 connector...
              </div>
              <div className="text-zinc-500">
                [00:00.08] KMS Secrets validated for Universe ID: 9481029194
              </div>

              {currentStepIndex >= 0 && (
                <div className="text-zinc-300">
                  ✔ [0.20s] Commit #c8914b received via webhook
                </div>
              )}
              {currentStepIndex >= 1 && (
                <div className="text-zinc-200">
                  ✔ [0.80s] Neural optimizer: 48 meshes LOD compressed, 0 leaks
                </div>
              )}
              {currentStepIndex >= 2 && (
                <div className="text-white">
                  ✔ [1.40s] Open Cloud Asset API: Assets registered successfully
                </div>
              )}
              {currentStepIndex >= 3 && (
                <div className="text-zinc-200">
                  ✔ [2.00s] Open Cloud Place Deploy: Version 2.14.9 published
                </div>
              )}
              {currentStepIndex >= 4 && (
                <div className="text-white font-bold pt-3 border-t border-white/[0.08]">
                  🚀 [2.40s] Live in production. 185,400 concurrent players untouched.
                </div>
              )}

              {isRunning && (
                <div className="text-white animate-pulse">
                  &gt; Executing pipeline phase {currentStepIndex + 1} of 5...
                </div>
              )}
            </div>

            <div className="bg-white/[0.02] px-6 py-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              <span>Rollback Protocol: Armed</span>
              <span>Zero-Downtime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
