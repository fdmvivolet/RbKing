import React, { useState } from 'react';
import { Code2, Layers, Check, Copy, RefreshCw, Cpu, Database } from 'lucide-react';
import { GameGenre } from '../types';
import { Language, Translations } from '../translations';

interface InteractiveAIGeneratorProps {
  t: Translations['aiEngine'];
  lang: Language;
}

interface GenreData {
  id: GameGenre;
  nameEn: string;
  nameBg: string;
  descEn: string;
  descBg: string;
  theme: string;
  targetCcu: string;
  luauSnippet: string;
  assetsEn: { label: string; count: string }[];
  assetsBg: { label: string; count: string }[];
  awsServices: string[];
}

const PRESETS: Record<GameGenre, GenreData> = {
  rpg: {
    id: 'rpg',
    nameEn: 'Fantasy RPG',
    nameBg: 'Фентъзи RPG',
    descEn: 'Multi-tiered quest trees, procedural dungeon layouts, dynamic loot spawning, and synchronized world bosses.',
    descBg: 'Многостепенни квестове, процедурни подземия, динамично генериране на лут и синхронизирани световни босове.',
    theme: 'Dark Fantasy & Ruined Citadels',
    targetCcu: '150,000+',
    luauSnippet: `-- [RbKing AI Engine] ServerScriptService.BossManager.lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local HttpService = game:GetService("HttpService")
local RbKingState = require(ReplicatedStorage.Packages.RbKingState)

local BossManager = {}
BossManager.__index = BossManager

function BossManager.SpawnWorldBoss(bossId: string, spawnCFrame: CFrame)
    local blueprint = RbKingState.FetchCachedArchetype(bossId)
    local bossModel = blueprint.Asset:Clone()
    bossModel.Humanoid.MaxHealth = blueprint.BaseHp * RbKingState.GetDynamicDifficultyMultiplier()
    bossModel.Humanoid.Health = bossModel.Humanoid.MaxHealth
    
    -- Sync AI behavioral tree state via AWS DynamoDB session
    RbKingState.StreamTelemetry({
        event = "BOSS_SPAWNED",
        entityId = bossId,
        coords = spawnCFrame.Position,
        tickRate = workspace:GetServerTimeNow()
    })
    
    bossModel:PivotTo(spawnCFrame)
    bossModel.Parent = workspace.WorldBosses
    return bossModel
end

return BossManager`,
    assetsEn: [
      { label: 'Procedural Voxel Meshes', count: '1.4M Blocks' },
      { label: 'LOD Weapon & Armor Models', count: '340 Assets' },
      { label: 'Neural NPC Behavior Nodes', count: '48 Nodes' },
      { label: 'Loot & Economy Tables', count: 'DynamoDB Synced' },
    ],
    assetsBg: [
      { label: 'Процедурни вокселни мешове', count: '1.4M Блока' },
      { label: 'LOD Оръжия и брони', count: '340 Актива' },
      { label: 'Невронни NPC възли', count: '48 Възела' },
      { label: 'Икономически таблици', count: 'DynamoDB Синхрон' },
    ],
    awsServices: ['AWS EKS (Game State)', 'Amazon DynamoDB (Player Stats)', 'Amazon ElastiCache Redis'],
  },
  tycoon: {
    id: 'tycoon',
    nameEn: 'Industrial Tycoon',
    nameBg: 'Индустриален Тайкун',
    descEn: 'Conveyor logistics, automated resource extraction, multi-world stock exchanges, and persistent player plots.',
    descBg: 'Конвейерна логистика, автодобив на ресурси, междусървърни борси и постоянни парцели на играчите.',
    theme: 'Cybernetic Automation Facility',
    targetCcu: '200,000+',
    luauSnippet: `-- [RbKing AI Engine] ServerScriptService.TycoonEngine.lua
local Players = game:GetService("Players")
local RbKingCloud = require(game.ServerScriptService.RbKingCloudBridge)

local Tycoon = {}
Tycoon.__index = Tycoon

function Tycoon.ProcessIncomeTick(player: Player, multiplier: number)
    local sessionData = RbKingCloud.GetPlayerFastCache(player.UserId)
    local grossEarnings = (sessionData.Generators * 12.5) * multiplier
    
    -- Transactional safe increment with AWS Startups Scalable Edge
    RbKingCloud.PostLedgerTransaction({
        userId = player.UserId,
        amount = grossEarnings,
        source = "DROPPER_AUTOMATION",
        clientSignature = sessionData.Token
    })
    
    sessionData.LocalWallet += grossEarnings
    player:SetAttribute("CurrentCash", sessionData.LocalWallet)
end

return Tycoon`,
    assetsEn: [
      { label: 'Modular Extractors & Belts', count: '180 Meshes' },
      { label: 'Vector UI Shop Layouts', count: 'Strict 4K UI' },
      { label: 'Transactional Currency Engine', count: 'ACID Compliant' },
      { label: 'Persistent Player Plots', count: '8 per Server' },
    ],
    assetsBg: [
      { label: 'Модулни екстрактори и ленти', count: '180 Меша' },
      { label: 'Векторен потребителски интерфейс', count: '4K Готовност' },
      { label: 'Транзакционна валутна система', count: 'ACID Съвместима' },
      { label: 'Постоянни парцели на играчи', count: '8 на Сървър' },
    ],
    awsServices: ['Amazon Aurora Serverless', 'Amazon SQS (Async Ledger)', 'AWS Lambda (Payouts)'],
  },
  obby: {
    id: 'obby',
    nameEn: 'Adaptive Obby',
    nameBg: 'Адаптивно Оби',
    descEn: 'Infinite procedural obstacle courses with real-time adaptive velocity scaling and anti-lag netcode.',
    descBg: 'Безкрайни процедурни трасета с адаптивна трудност и защита от лаг.',
    theme: 'Monochrome Zenith Heights',
    targetCcu: '250,000+',
    luauSnippet: `-- [RbKing AI Engine] ReplicatedStorage.ObbyGenerator.lua
local RunService = game:GetService("RunService")
local RbKingMeshLOD = require(game.ReplicatedStorage.RbKingMeshLOD)

local ObbyProcedural = {}

function ObbyProcedural.GenerateChunk(stageIndex: number, difficultySeed: number)
    local segment = Instance.new("Folder")
    segment.Name = "Stage_" .. stageIndex
    
    local obstacleType = RbKingMeshLOD.SampleObstacleMatrix(difficultySeed)
    local laserHazards = obstacleType:InstantiatePhysicsObstacle({
        revolvingSpeed = math.min(1.2 * (stageIndex * 0.05), 4.5),
        checkpointKey = stageIndex,
        isStreamed = true
    })
    
    laserHazards.Parent = segment
    return segment
end

return ObbyProcedural`,
    assetsEn: [
      { label: 'Dynamic Hazards & Lasers', count: '120 Blueprints' },
      { label: 'Network Anti-Cheat Timers', count: 'Server Authoritative' },
      { label: 'Predictive Chunk Preload', count: 'Zero-Lag Streaming' },
      { label: 'Global Ranking Shards', count: 'ElastiCache <2ms' },
    ],
    assetsBg: [
      { label: 'Динамични препятствия и лазери', count: '120 Модела' },
      { label: 'Сървърен анти-чийт таймер', count: 'Server Authoritative' },
      { label: 'Предиктивно зареждане', count: 'Zero-Lag Streaming' },
      { label: 'Глобални класации', count: 'ElastiCache <2ms' },
    ],
    awsServices: ['Amazon CloudFront Edge', 'Amazon DynamoDB Streams', 'AWS Fargate (Matchmaking)'],
  },
  battleroyale: {
    id: 'battleroyale',
    nameEn: 'Battle Royale',
    nameBg: 'Батъл Роял',
    descEn: 'Dynamic storm zones, projectile ballistic simulation, procedural weapon crates, and spatial audio.',
    descBg: 'Динамична бурна зона, балистика на снаряди, процедурни кутии с оръжия и пространствен звук.',
    theme: 'Titanium Warfare Island',
    targetCcu: '100,000+',
    luauSnippet: `-- [RbKing AI Engine] ServerScriptService.StormController.lua
local TweenService = game:GetService("TweenService")
local RbKingSpatial = require(game.ServerScriptService.RbKingSpatialGrid)

local StormController = {}

function StormController.InitiatePhase(phaseNumber: number, duration: number)
    local nextSafeRadius = math.floor(3000 * math.pow(0.68, phaseNumber))
    local nextCenter = RbKingSpatial.CalculateWeightedSafetyPoint()
    
    workspace:SetAttribute("StormTargetCenter", nextCenter)
    workspace:SetAttribute("StormTargetRadius", nextSafeRadius)
    
    -- Broadcast server tick to AWS Edge Telemetry for hitreg tracking
    RbKingSpatial.BroadcastServerSync("STORM_SHRINK", {
        center = nextCenter,
        radius = nextSafeRadius,
        dps = 2.5 * phaseNumber
    })
end

return StormController`,
    assetsEn: [
      { label: 'Modular Weapon Attachments', count: '65 Assets' },
      { label: 'Luau Ballistic Engine', count: 'FastCast High-Perf' },
      { label: 'AI Spawn Distribution', count: 'Heatmap Based' },
      { label: 'Cloud Match Replays', count: 'Amazon S3 Store' },
    ],
    assetsBg: [
      { label: 'Модулни оръжия', count: '65 Актива' },
      { label: 'Luau балистичен двигател', count: 'FastCast High-Perf' },
      { label: 'ИИ баланс на спавна', count: 'Heatmap Анализ' },
      { label: 'Облачни реплеи', count: 'Amazon S3 Store' },
    ],
    awsServices: ['AWS GameLift FleetIQ', 'Amazon S3 (Match Replays)', 'Amazon CloudWatch Logs'],
  },
  simulation: {
    id: 'simulation',
    nameEn: 'Sandbox Simulator',
    nameBg: 'Сендбокс Симулатор',
    descEn: 'Complex physics interactions, companion neural pathfinding, trade marketplace, and persistent state.',
    descBg: 'Физически симулации, невронно ориентиране на домашни любимци, търговски пазар и постоянство.',
    theme: 'Architectural Monolith Archipelago',
    targetCcu: '180,000+',
    luauSnippet: `-- [RbKing AI Engine] ServerScriptService.PetBehaviorAI.lua
local PathfindingService = game:GetService("PathfindingService")
local RbKingAI = require(game.ServerScriptService.RbKingAI)

local PetBrain = {}
PetBrain.__index = PetBrain

function PetBrain.TickFollowBehavior(petModel: Model, targetPlayer: Player)
    local targetCharacter = targetPlayer.Character
    if not targetCharacter or not targetCharacter:FindFirstChild("HumanoidRootPart") then return end
    
    local distance = (petModel.PrimaryPart.Position - targetCharacter.HumanoidRootPart.Position).Magnitude
    if distance > 14 then
        local path = PathfindingService:CreatePath({ AgentRadius = 1.5, AgentCanJump = true })
        path:ComputeAsync(petModel.PrimaryPart.Position, targetCharacter.HumanoidRootPart.Position)
        RbKingAI.ExecuteSmoothNav(petModel, path:GetWaypoints())
    end
end

return PetBrain`,
    assetsEn: [
      { label: 'Rigged Animated Companions', count: '90 Entities' },
      { label: 'Procedural Biome Assembler', count: 'Perlin Generator' },
      { label: 'Delta-Sync Save Engine', count: 'Cloud Realtime' },
      { label: 'Secure Trading Protocols', count: 'Atomic Lock Safe' },
    ],
    assetsBg: [
      { label: 'Анимирани спътници', count: '90 Героя' },
      { label: 'Процедурни биоми', count: 'Perlin Generator' },
      { label: 'Запазване на състоянието', count: 'Cloud Realtime' },
      { label: 'Сигурна търговска система', count: 'Atomic Lock Safe' },
    ],
    awsServices: ['AWS AppSync (Real-time GraphQL)', 'Amazon DynamoDB', 'Amazon ECS Containers'],
  },
};

export const InteractiveAIGenerator: React.FC<InteractiveAIGeneratorProps> = ({ t, lang }) => {
  const [selectedGenre, setSelectedGenre] = useState<GameGenre>('rpg');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const activePreset = PRESETS[selectedGenre];
  const name = lang === 'en' ? activePreset.nameEn : activePreset.nameBg;
  const desc = lang === 'en' ? activePreset.descEn : activePreset.descBg;
  const assets = lang === 'en' ? activePreset.assetsEn : activePreset.assetsBg;

  const handleRunSimulation = (genre: GameGenre) => {
    setSelectedGenre(genre);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(activePreset.luauSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-engine" className="py-28 border-b border-white/[0.08] bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 04.0 // SYNTHESIS ]</span>
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

        {/* Sharp Genre Tabs */}
        <div className="mt-12 flex flex-wrap border-b border-white/15 bg-transparent">
          {(Object.keys(PRESETS) as GameGenre[]).map((genreKey, idx) => {
            const p = PRESETS[genreKey];
            const isSelected = selectedGenre === genreKey;
            const label = lang === 'en' ? p.nameEn : p.nameBg;
            return (
              <button
                key={genreKey}
                onClick={() => handleRunSimulation(genreKey)}
                className={`px-6 py-3 text-xs font-mono tracking-wider uppercase transition-all duration-150 border-r border-white/10 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span className="mr-2 opacity-60">0{idx + 1}.</span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Generator Output Console Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/15 items-stretch">
          {/* Left Column: Place Specs (5 cols) */}
          <div className="lg:col-span-5 bg-[#070709] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-luxury text-lg font-bold text-white tracking-wide">
                    {name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                    Theme: {activePreset.theme}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{t.targetCcu}</span>
                  <span className="font-mono text-sm font-bold text-white">
                    {activePreset.targetCcu}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 mt-5 leading-relaxed font-light">
                {desc}
              </p>

              {/* Status generation animation */}
              <div className="mt-6 border border-white/10 bg-black/60 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-300 flex items-center gap-2">
                    <RefreshCw className={`h-3.5 w-3.5 text-white ${isGenerating ? 'animate-spin' : ''}`} />
                    {isGenerating ? t.statusGenerating : t.statusReady}
                  </span>
                  <span className="text-xs font-mono text-white">100% OK</span>
                </div>
              </div>

              {/* Asset Composition breakdown */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                  <Layers className="h-3.5 w-3.5 text-zinc-400" />
                  {t.exportedAssets}
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                  {assets.map((item, idx) => (
                    <div key={idx} className="bg-[#050507] p-3 text-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">{item.label}</span>
                      <span className="font-mono font-medium text-zinc-200 mt-0.5 block">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connected AWS Stack */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 mb-2.5">
                <Database className="h-3.5 w-3.5 text-zinc-400" />
                {t.awsInfrastructure}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activePreset.awsServices.map((service, idx) => (
                  <span key={idx} className="inline-flex items-center text-[10px] font-mono tracking-wider text-zinc-300 bg-white/[0.04] px-2.5 py-1 border border-white/[0.08]">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Luau Script Engine Preview (7 cols) */}
          <div className="lg:col-span-7 bg-[#050507] flex flex-col justify-between">
            {/* Code window top bar */}
            <div className="flex items-center justify-between bg-white/[0.02] px-6 py-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-white" />
                <span className="font-mono text-xs text-zinc-300">
                  RobloxStudio · ServerScriptService · Luau 5.1
                </span>
              </div>

              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white px-3 py-1.5 border border-white/15 bg-white/[0.04] hover:bg-white/10 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-white" />
                    <span className="text-white font-medium">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>{t.copyCode}</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Editor Body */}
            <div className="p-6 overflow-x-auto font-mono text-xs leading-relaxed text-zinc-300 min-h-[440px] bg-[#050507]">
              <pre>
                <code>{activePreset.luauSnippet}</code>
              </pre>
            </div>

            {/* Code footer banner */}
            <div className="flex items-center justify-between bg-white/[0.02] px-6 py-3.5 border-t border-white/[0.08] text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-white" />
                {t.safeCheck}
              </span>
              <span className="text-zinc-600">CI/CD Passed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
