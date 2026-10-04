import React, { useState } from 'react';
import { Database, Network, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language, Translations } from '../translations';

interface AwsArchitectureProps {
  t: Translations['awsCloud'];
  lang: Language;
}

interface NodeDetail {
  id: string;
  name: string;
  categoryEn: string;
  categoryBg: string;
  badge: string;
  descEn: string;
  descBg: string;
  metrics: string;
  robloxEn: string;
  robloxBg: string;
}

const NODES_DATA: NodeDetail[] = [
  {
    id: 'compute',
    name: 'AWS EKS & Fargate Gaming Fleet',
    categoryEn: 'Compute & Game Shards',
    categoryBg: 'Изчисления и Игрови Шардове',
    badge: 'Multi-AZ Auto-Healing',
    descEn: 'Containerized matchmaking nodes, cross-server teleportation gateways, and tournament rooms scaling seamlessly from 10 to 100,000 servers during Roblox viral spikes.',
    descBg: 'Контейнеризирани сървъри за мачмейкинг и турнирни стаи с динамично мащабиране от 10 до 100,000 сървъра при пикови натоварвания.',
    metrics: '<30ms instance spinup · 99.999% SLA',
    robloxEn: 'Secure binary WebSocket tunnel directly into active Roblox server instances',
    robloxBg: 'Защитен бинарен WebSocket тунел директно към активните Roblox инстанции',
  },
  {
    id: 'storage',
    name: 'Amazon DynamoDB Global Tables',
    categoryEn: 'Database & Inventory Ledgers',
    categoryBg: 'Бази Данни и Инвентари',
    badge: 'Single-Digit Millisecond',
    descEn: 'Player profiles, currencies, and item gear stored with atomic locks (ACID) to eradicate rollback and item duplication exploits forever.',
    descBg: 'Съхранение на профили, валути и екипировка с атомарно заключване (ACID) без риск от дюпликации и загуба на прогрес.',
    metrics: 'Millions of tx/sec · Zero Dupe Exploits',
    robloxEn: 'Automated bi-directional sync with Roblox Open Cloud DataStore v2',
    robloxBg: 'Автоматична двупосочна синхронизация с Roblox Open Cloud DataStore v2',
  },
  {
    id: 'cache',
    name: 'Amazon ElastiCache (Redis Cluster)',
    categoryEn: 'In-Memory Cache & Leaderboards',
    categoryBg: 'Кеш и Бързи Класации',
    badge: 'Sub-Millisecond Read Latency',
    descEn: 'Ultra-low-latency in-memory state for global player auctions, clan territorial wars, and live high-frequency competitive leaderboards.',
    descBg: 'Кеш в оперативната памет за глобални аукциони, кланови войни и моментални световни класации.',
    metrics: '<1.2ms read latency · Clustered Sharding',
    robloxEn: 'Global inter-server cross-chat broker and state synchronization',
    robloxBg: 'Глобален крос-сървърен чат брокер и синхронизация между плейсове',
  },
  {
    id: 'serverless',
    name: 'AWS Lambda & EventBridge Pipeline',
    categoryEn: 'Event-Driven Analytics & Hooks',
    categoryBg: 'Събитийна Аналитика и Хукове',
    badge: 'Zero Idle Cost',
    descEn: 'Real-time telemetry event processor for gamepass purchases, seasonal battlepass progression, and dynamic neural world generation triggers.',
    descBg: 'Обработка на събития в реално време: покупки на gamepass, сезонни награди и ИИ генерация при поискване.',
    metrics: '0 cost when idle · 100k events/sec',
    robloxEn: 'Webhook consumer for Roblox Open Cloud Notification events',
    robloxBg: 'Webhook приемник за Roblox Open Cloud известия',
  },
  {
    id: 'telemetry',
    name: 'Amazon CloudWatch & OpenTelemetry',
    categoryEn: 'Observability & Automated Healing',
    categoryBg: 'Мониторинг и Самолечение',
    badge: 'Zero-Blindspot Telemetry',
    descEn: 'Real-time aggregation of Luau server error stacks, client rendering FPS across mobile and PC, with anomaly detection rebooting stalled instances.',
    descBg: 'Централизирано събиране на логове, мониторинг на FPS на мобилни и PC устройства с предиктивно засичане на сривове.',
    metrics: '5-second metric intervals · Realtime Alarms',
    robloxEn: 'Automated reboot of degraded server instances via Platform API',
    robloxBg: 'Автоматичен рестарт на блокирали сървъри чрез Open Cloud API',
  },
  {
    id: 'security',
    name: 'AWS Secrets Manager & IAM Identity',
    categoryEn: 'Enterprise Security & Governance',
    categoryBg: 'Корпоративна Сигурност',
    badge: 'SOC2 & ISO 27001 Ready',
    descEn: 'Hardware encryption for Roblox Open Cloud API keys, studio OAuth2 tokens, and role-based permissions preventing unauthorized game publishes.',
    descBg: 'Хардуерно криптиране на Open Cloud ключове, ротация на OAuth2 токени и разграничаване на достъпа в студиото.',
    metrics: 'KMS AES-256 encryption · 30-day Auto-Rotation',
    robloxEn: 'Cryptographic request signing for every place deployment',
    robloxBg: 'Криптографско подписване на заявките за деплой на плейсове',
  },
];

export const AwsArchitecture: React.FC<AwsArchitectureProps> = ({ t, lang }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('compute');

  const activeNode = NODES_DATA.find((n) => n.id === selectedNodeId) || NODES_DATA[0];
  const category = lang === 'en' ? activeNode.categoryEn : activeNode.categoryBg;
  const desc = lang === 'en' ? activeNode.descEn : activeNode.descBg;
  const robloxIntegration = lang === 'en' ? activeNode.robloxEn : activeNode.robloxBg;

  return (
    <section id="aws-cloud" className="py-28 border-b border-white/[0.08] bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 05.0 // INFRASTRUCTURE ]</span>
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

        {/* Monolithic Architecture Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/15 items-stretch">
          {/* Left Column: Interactive Node List (5 cols) */}
          <div className="lg:col-span-5 bg-[#050507] divide-y divide-white/[0.08]">
            {NODES_DATA.map((node, idx) => {
              const isSelected = node.id === selectedNodeId;
              const nodeCat = lang === 'en' ? node.categoryEn : node.categoryBg;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full text-left p-6 transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-white/[0.07] border-l-2 border-white'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
                      0{idx + 1} // {nodeCat}
                    </span>
                    <h3 className="font-luxury text-sm font-bold text-white tracking-wide">
                      {node.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1 font-light">
                      {node.metrics}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 mt-1 transition-transform shrink-0 ${
                      isSelected ? 'text-white translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-dive Specification Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#070709] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                    {category}
                  </span>
                  <h3 className="font-luxury text-2xl font-bold text-white mt-1">
                    {activeNode.name}
                  </h3>
                </div>
                <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider px-3 py-1 bg-white/10 text-white border border-white/20">
                  {activeNode.badge}
                </span>
              </div>

              {/* Node description */}
              <div className="mt-8 space-y-5">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {desc}
                </p>

                {/* Metrics Box */}
                <div className="border border-white/10 bg-black/60 p-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                    <Zap className="h-3.5 w-3.5 text-zinc-400" />
                    {t.performanceTitle}
                  </div>
                  <div className="font-mono text-xs text-zinc-300">
                    {activeNode.metrics}
                  </div>
                </div>

                {/* Platform Integration Mechanism */}
                <div className="border border-white/10 bg-black/60 p-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                    <Network className="h-3.5 w-3.5 text-zinc-400" />
                    {t.integrationTitle}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {robloxIntegration}
                  </p>
                </div>
              </div>
            </div>

            {/* AWS Guarantee row */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                {t.guarantee}
              </span>
              <span className="text-white uppercase tracking-wider">
                {t.readyTag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
