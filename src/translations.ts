export type Language = 'en' | 'bg';

export interface Translations {
  nav: {
    features: string;
    projects: string;
    aiEngine: string;
    awsCloud: string;
    monitoring: string;
    testimonials: string;
    pricing: string;
    watchDemo: string;
    earlyAccess: string;
  };
  hero: {
    trustBadge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    liveRuntime: string;
    activeStatus: string;
    ccuLabel: string;
    tickRateLabel: string;
    pingLabel: string;
    crashRateLabel: string;
    luauSync: string;
    awsStack: string;
    openCloudDeploy: string;
    awsVerified: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewMetrics: string;
    techPillars: string;
    aiRole: string;
    analyticsRole: string;
    peakCcu: string;
    serverFps: string;
    monthlyVisits: string;
    items: {
      id: string;
      title: string;
      genre: string;
      description: string;
      aiContribution: string;
      analyticsContribution: string;
      ccu: string;
      fps: string;
      visits: string;
      tags: string[];
    }[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    cards: {
      title: string;
      description: string;
      metric: string;
    }[];
  };
  aiEngine: {
    badge: string;
    title: string;
    subtitle: string;
    statusReady: string;
    statusGenerating: string;
    copyCode: string;
    copied: string;
    exportedAssets: string;
    awsInfrastructure: string;
    targetCcu: string;
    safeCheck: string;
  };
  awsCloud: {
    badge: string;
    title: string;
    subtitle: string;
    performanceTitle: string;
    integrationTitle: string;
    guarantee: string;
    readyTag: string;
  };
  monitoring: {
    badge: string;
    title: string;
    subtitle: string;
    ccuTab: string;
    tickRateTab: string;
    memoryTab: string;
    latencyTab: string;
    peakDay: string;
    stability: string;
    robloxLimit: string;
    route53: string;
    telemetryStream: string;
    healingTitle: string;
    healingNotice: string;
    cpuSavings: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
      studio: string;
      stat: string;
      statLabel: string;
    }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    calcTitle: string;
    calcSubtitle: string;
    awsGrantCover: string;
    ccuSlider: string;
    visitsSlider: string;
    computeHours: string;
    openCloudCalls: string;
    estCost: string;
    perMonth: string;
    autoScale: string;
    zeroIdle: string;
    batchTransfer: string;
    requestQuote: string;
    selectPlan: string;
    tiers: {
      indieTitle: string;
      indieCcu: string;
      indieDesc: string;
      indiePrice: string;
      indiePeriod: string;
      proTitle: string;
      proCcu: string;
      proDesc: string;
      proPrice: string;
      proPeriod: string;
      entTitle: string;
      entCcu: string;
      entDesc: string;
      entPrice: string;
      entPeriod: string;
      popularBadge: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    studioLabel: string;
    studioPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    inquiryLabel: string;
    inquiryOptions: {
      earlyAccess: string;
      awsPilot: string;
      enterprise: string;
    };
    submitButton: string;
    submitting: string;
    privacyNotice: string;
    successTitle: string;
    successRef: string;
    successBody: string;
    submitAnother: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
  };
  footer: {
    brandDesc: string;
    standardNotice: string;
    navProduct: string;
    navCompany: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      features: 'Features',
      projects: 'Projects',
      aiEngine: 'AI Engine',
      awsCloud: 'AWS Cloud',
      monitoring: 'Monitoring',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      watchDemo: 'Watch Demo',
      earlyAccess: 'Get Early Access',
    },
    hero: {
      trustBadge: 'AWS Startups & Activate Ready Architecture · Roblox Open Cloud API',
      titleStart: 'Accelerating Roblox world creation with ',
      titleHighlight: 'AI & AWS Cloud',
      titleEnd: ' infrastructure',
      description:
        'RbKing unites neural generation for 3D worlds and Luau scripts with scalable AWS infrastructure. Automate deployment via Open Cloud, track live 60 FPS tick rates, and eliminate player downtime.',
      ctaPrimary: 'Get Early Access',
      ctaSecondary: 'Interactive Preview',
      metric1Val: '10x',
      metric1Label: 'Faster place prototyping',
      metric2Val: '99.99%',
      metric2Label: 'AWS EKS backend availability',
      metric3Val: '<1.2s',
      metric3Label: 'Automated Open Cloud deploy',
      liveRuntime: 'RBKING CLOUD RUNTIME',
      activeStatus: 'ACTIVE',
      ccuLabel: 'Active Players (CCU)',
      tickRateLabel: 'Server Tick Rate',
      pingLabel: 'Average Latency',
      crashRateLabel: 'Crash Rate (24h)',
      luauSync: 'AI World Engine (Luau 5.1)',
      awsStack: 'AWS GameLift & ElastiCache',
      openCloudDeploy: 'Roblox Open Cloud Deployment',
      awsVerified: 'AWS Startups Standards Compliant',
    },
    projects: {
      badge: 'Featured Places',
      title: 'Built with RbKing: High-Scale Roblox Experiences',
      subtitle:
        'Explore flagship games powered by our neural procedural generation, dynamic Luau architectures, and multi-region AWS cloud backend.',
      viewMetrics: 'Key Metrics',
      techPillars: 'Architecture Pillars',
      aiRole: 'AI Implementation',
      analyticsRole: 'AWS & Analytics',
      peakCcu: 'Peak CCU',
      serverFps: 'Server Tick Rate',
      monthlyVisits: 'Monthly Visits',
      items: [
        {
          id: 'cyber-realm',
          title: 'CyberRealm: Neon Siege',
          genre: 'Tactical Sci-Fi RPG',
          description:
            'A sprawling cyberpunk metropolis featuring dynamic vertical parkour, multi-tier boss raids, and continuous street skirmishes across 8 square kilometers.',
          aiContribution:
            'Generative procedural city geometry with automated level-of-detail mesh reduction and neural state machine synthesis for 800+ NPC agents.',
          analyticsContribution:
            'Distributed AWS ECS session nodes connected to Amazon DynamoDB for real-time inventory locking with zero duplication exploits.',
          ccu: '185,400',
          fps: '59.9 FPS',
          visits: '14.2M',
          tags: ['Neural NPCs', 'DynamoDB ACID', '60 FPS Tick'],
        },
        {
          id: 'chrono-tycoon',
          title: 'Chrono Tycoon: Deep Space',
          genre: 'Industrial Economy Simulator',
          description:
            'Multiplanetary mining empire where thousands of concurrent players trade rare ores across inter-server orbital exchanges.',
          aiContribution:
            'Automated Luau transaction validation engines and procedural planetary terrain generation synthesized in under 90 seconds.',
          analyticsContribution:
            'Amazon ElastiCache Redis cluster synchronizing galactic market price fluctuations globally with sub-2 millisecond latency.',
          ccu: '240,100',
          fps: '60.0 FPS',
          visits: '28.6M',
          tags: ['Zero Dupes', 'ElastiCache Redis', 'Global Economy'],
        },
        {
          id: 'vortex-obby',
          title: 'Vortex Obby: Gravity Flux',
          genre: 'Adaptive Procedural Platformer',
          description:
            'An ever-evolving obstacle course where stages continuously recombine with dynamic gravity shifts tailored to individual player skill levels.',
          aiContribution:
            'Dynamic AI difficulty balancer calculating player jump velocity and obstacle clearance in real time to generate unique custom stages.',
          analyticsContribution:
            'AWS CloudFront edge telemetry logging global checkpoint timing to detect automated bots and exploit injectors instantly.',
          ccu: '94,800',
          fps: '59.8 FPS',
          visits: '42.1M',
          tags: ['Adaptive AI', 'CloudFront Edge', 'Zero-Lag'],
        },
        {
          id: 'aethelgard',
          title: 'Aethelgard: Guild Realms',
          genre: 'Massive Multiplayer Fantasy Sandbox',
          description:
            'Castle sieges, naval territory expansion, and guild economies spanning interconnected Roblox universes.',
          aiContribution:
            'Deep procedural biome assembly with neural LOD streaming that maintains smooth frame rates even on entry-level mobile devices.',
          analyticsContribution:
            'AWS GameLift fleet scaling instances from 20 to 1,400 active servers during weekend tournament spikes with zero disconnects.',
          ccu: '132,500',
          fps: '59.9 FPS',
          visits: '18.4M',
          tags: ['AWS GameLift', 'Mobile Optimized', 'Guild Cross-Server'],
        },
      ],
    },
    features: {
      badge: 'Platform Capabilities',
      title: 'Complete toolkit for developing, scaling, and publishing Roblox places',
      subtitle:
        'RbKing eliminates traditional development bottlenecks: from tedious manual modeling to server crashes during high-traffic viral spikes.',
      learnMore: 'Learn More',
      cards: [
        {
          title: 'Neural World & Luau Generation',
          description:
            'Synthesize voxel landscapes, dungeon layouts, loot tables, and Luau behavior trees for RPG, Tycoon, Obby, and Battle Royale genres.',
          metric: '10x Speedup',
        },
        {
          title: 'AWS Cloud Scalability',
          description:
            'Rock-solid backend on AWS ECS, DynamoDB, and ElastiCache Redis with automatic horizontal container scaling.',
          metric: '99.99% Availability',
        },
        {
          title: 'Performance Monitoring Dashboard',
          description:
            'Live telemetry tracking 60 FPS server tick rates, memory usage, network latency, and automated self-healing triggers.',
          metric: 'Target 60.0 FPS',
        },
        {
          title: 'Open Cloud CI/CD & Asset Rollout',
          description:
            'Automated compilation, mesh compression, and place publishing via Roblox Open Cloud API with instant 3-second rollback.',
          metric: 'Zero-Downtime Rollout',
        },
        {
          title: 'Real-Time Multi-Creator Collaboration',
          description:
            'Smart merge algorithms preventing conflict overwrites in Roblox Studio Explorer, backed by a unified studio asset catalog.',
          metric: 'Live Workspace Sync',
        },
        {
          title: 'Flexible Billing & AWS Grants',
          description:
            'Pay strictly for what you use with full support for AWS Startups Activate credits ranging from $25,000 to $100,000.',
          metric: 'AWS Activate Ready',
        },
      ],
    },
    aiEngine: {
      badge: 'AI World Generation',
      title: 'Neural Generation of 3D Worlds & Clean Luau Architecture',
      subtitle:
        'Generate complete place foundations in minutes. Our model outputs clean, production-ready Luau scripts, procedural geometry, and binds AWS microservices.',
      statusReady: 'Ready for Studio Export',
      statusGenerating: 'Synthesizing Architecture...',
      copyCode: 'Copy Luau Script',
      copied: 'Copied to Clipboard',
      exportedAssets: 'Generated Place Composition',
      awsInfrastructure: 'Connected AWS Services',
      targetCcu: 'Target CCU Capacity',
      safeCheck: 'Luau Strict Typing & Zero Memory Leak Verification Passed',
    },
    awsCloud: {
      badge: 'AWS Startups Architecture',
      title: 'Enterprise AWS Architecture: Built for Millions of Players',
      subtitle:
        'Roblox places require resilient game backends independent of local DataStore limits. Built following the AWS Well-Architected Framework.',
      performanceTitle: 'Performance & Availability Metrics',
      integrationTitle: 'Roblox Platform Integration',
      guarantee: 'Verified by AWS Startups Solutions Architects',
      readyTag: 'AWS Activate Eligible',
    },
    monitoring: {
      badge: 'Live Server Telemetry',
      title: 'Real-Time Game Server Performance Dashboard',
      subtitle:
        'Full observability over thousands of active Roblox game sessions. Track tick rates, memory consumption, latency, and mitigate crashes before players notice.',
      ccuTab: 'Active Players (CCU)',
      tickRateTab: 'Server Tick Rate',
      memoryTab: 'RAM Consumption',
      latencyTab: 'Network Latency',
      peakDay: '24h Peak:',
      stability: 'Stability: 99.98% servers at 60 FPS',
      robloxLimit: 'Roblox Limit: 6,144 MB',
      route53: 'AWS Route 53 Edge: <25ms',
      telemetryStream: 'Live CloudWatch Stream (5s)',
      healingTitle: 'Intelligent Self-Healing Backend',
      healingNotice: 'All server instances synchronized without physics desync.',
      cpuSavings: 'Reduced Server Overhead: -42% CPU',
    },
    testimonials: {
      badge: 'Developer Testimonials',
      title: 'Trusted by Leading Roblox Studios & Creators',
      subtitle:
        'Discover how top game studios transform their development speed, server stability, and economics with RbKing.',
      items: [
        {
          quote:
            'Integrating RbKing’s procedural world pipeline trimmed our level design cycle from 7 months to just 3 weeks. During our major summer update with 185,000 CCU, AWS ElastiCache and DynamoDB handled every transaction without a single inventory drop.',
          author: 'Marcus Vance',
          role: 'Technical Director',
          studio: 'Hyperion Interactive',
          stat: '7 mo → 3 wk',
          statLabel: 'Level Design Cycle',
        },
        {
          quote:
            'The automated Open Cloud CI/CD and self-healing tick rate monitoring saved our studio during peak weekend traffic. We pushed four hotfixes without disconnecting a single player while keeping server FPS pinned at 60.0.',
          author: 'Elena Rostova',
          role: 'Co-Founder & Lead Producer',
          studio: 'Nebula Game Labs',
          stat: '60.0 FPS',
          statLabel: 'Pinned Server Stability',
        },
        {
          quote:
            'As a high-velocity Roblox studio applying for AWS Startups Activate, RbKing provided the enterprise architecture we needed out of the box. Our server hosting costs dropped by 38% thanks to intelligent auto-scaling.',
          author: 'David Chen',
          role: 'Head of Infrastructure',
          studio: 'Vanguard Metaverse Studios',
          stat: '-38%',
          statLabel: 'Hosting Cost Optimization',
        },
      ],
    },
    pricing: {
      badge: 'Transparent Billing',
      title: 'Predictable pricing aligned with your game’s player growth',
      subtitle:
        'Pay strictly for computing resources and neural generation. Fully compatible with AWS Activate startup credits to start with zero upfront capital.',
      calcTitle: 'AWS Cloud Infrastructure Cost Estimator',
      calcSubtitle: 'Simulate the exact cloud resources needed for your place',
      awsGrantCover: 'Covered by AWS Activate Credits ($25k–$100k)',
      ccuSlider: 'Average Concurrent Players (CCU):',
      visitsSlider: 'Monthly Place Visits:',
      computeHours: 'AWS Compute Capacity:',
      openCloudCalls: 'Roblox Open Cloud Calls:',
      estCost: 'Estimated Monthly Cloud Cost',
      perMonth: '/ month',
      autoScale: 'Dynamic auto-scaling matches peak player surges',
      zeroIdle: 'Zero payment during idle low-traffic night hours',
      batchTransfer: 'Batched Open Cloud requests avoid quota throttling',
      requestQuote: 'Request Architecture Calculation',
      selectPlan: 'Select Plan',
      tiers: {
        indieTitle: 'Indie Studio',
        indieCcu: 'Up to 2,500 CCU',
        indieDesc: 'Perfect for launching your first place and validating viral retention.',
        indiePrice: 'Free',
        indiePeriod: 'during beta',
        proTitle: 'Studio Pro',
        proCcu: 'Up to 50,000 CCU',
        proDesc: 'For established studios shipping bi-weekly updates and multi-world places.',
        proPrice: '$149',
        proPeriod: '/ mo + usage',
        entTitle: 'Enterprise Fleet',
        entCcu: '100,000+ CCU',
        entDesc: 'Dedicated Multi-AZ AWS cluster with a dedicated Solutions Architect.',
        entPrice: 'Custom',
        entPeriod: 'tailored SLA',
        popularBadge: 'Most Popular',
      },
    },
    contact: {
      badge: 'Early Access & AWS Startups Pilot',
      title: 'Connect with RbKing Technical Team',
      subtitle:
        'Join the closed beta for your Roblox studio. Qualified participants receive full guidance applying for up to $100,000 in AWS Activate startup credits.',
      fullNameLabel: 'Full Name / Studio Lead *',
      fullNamePlaceholder: 'Alex Rivera',
      emailLabel: 'Work Email Address *',
      emailPlaceholder: 'alex@yourstudio.com',
      studioLabel: 'Studio Name or Roblox Place Link *',
      studioPlaceholder: 'Apex Roblox Studios or Place URL',
      messageLabel: 'Brief Message & Project Needs *',
      messagePlaceholder:
        'Tell us about your game genre, target CCU, and current infrastructure challenges...',
      inquiryLabel: 'Inquiry Category',
      inquiryOptions: {
        earlyAccess: 'Beta Early Access',
        awsPilot: 'AWS Startups Pilot',
        enterprise: 'Enterprise Cluster',
      },
      submitButton: 'Contact Us',
      submitting: 'Submitting Inquiry...',
      privacyNotice: 'Strict confidentiality guaranteed. We never disclose your game blueprints.',
      successTitle: 'Inquiry Received Successfully',
      successRef: 'Reference ID:',
      successBody:
        'Our AWS Solutions Architect and Roblox Technical Lead will review your submission and reach out within 24 hours with sandbox credentials.',
      submitAnother: 'Submit Another Message',
      errors: {
        nameRequired: 'Please enter your name or studio lead',
        emailRequired: 'Please enter your email address',
        emailInvalid: 'Please enter a valid email format',
        messageRequired: 'Please provide a brief message describing your project',
      },
    },
    footer: {
      brandDesc:
        'Next-generation AI and AWS cloud infrastructure engine for Roblox studio creators. Built for seamless scalability, 60 FPS tick rates, and automated Open Cloud deployments.',
      standardNotice:
        'Architected according to AWS Well-Architected Framework & Roblox Open Cloud API Guidelines.',
      navProduct: 'Product',
      navCompany: 'Partnership',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },
  },
  bg: {
    nav: {
      features: 'Възможности',
      projects: 'Проекти',
      aiEngine: 'ИИ Генератор',
      awsCloud: 'AWS Облак',
      monitoring: 'Мониторинг',
      testimonials: 'Отзиви',
      pricing: 'Цени',
      watchDemo: 'Демо',
      earlyAccess: 'Ранен достъп',
    },
    hero: {
      trustBadge: 'AWS Startups & Activate Готова Архитектура · Roblox Open Cloud API',
      titleStart: 'Ускорено създаване на Roblox светове с ',
      titleHighlight: 'ИИ и облак AWS',
      titleEnd: ' инфраструктура',
      description:
        'RbKing съчетава невронно генериране на 3D светове и Luau скриптове с мащабируема AWS инфраструктура. Автоматизирайте деплоя чрез Open Cloud, следете стабилността на сървърите при 60 FPS и елиминирайте прекъсванията.',
      ctaPrimary: 'Заявете ранен достъп',
      ctaSecondary: 'Интерактивно демо',
      metric1Val: '10x',
      metric1Label: 'По-бързо прототипиране',
      metric2Val: '99.99%',
      metric2Label: 'Наличност на AWS EKS брая',
      metric3Val: '<1.2s',
      metric3Label: 'Автоматичен Open Cloud деплой',
      liveRuntime: 'RBKING CLOUD RUNTIME',
      activeStatus: 'АКТИВЕН',
      ccuLabel: 'Играчи онлайн (CCU)',
      tickRateLabel: 'Server Tick Rate',
      pingLabel: 'Средно закъснение',
      crashRateLabel: 'Сривове (24ч)',
      luauSync: 'ИИ Световен Двигател (Luau 5.1)',
      awsStack: 'AWS GameLift & ElastiCache',
      openCloudDeploy: 'Roblox Open Cloud Деплой',
      awsVerified: 'Съответствие със стандартите на AWS Startups',
    },
    projects: {
      badge: 'Нашите Проекти',
      title: 'Създадени с RbKing: Мащабни Roblox Преживявания',
      subtitle:
        'Разгледайте водещите заглавия, задвижвани от нашето процедурно генериране, Luau архитектури и мултирегионален AWS бекенд.',
      viewMetrics: 'Основни показатели',
      techPillars: 'Архитектурни стълбове',
      aiRole: 'Приложение на ИИ',
      analyticsRole: 'AWS и Анализ',
      peakCcu: 'Пик CCU',
      serverFps: 'Server Tick Rate',
      monthlyVisits: 'Месечни посещения',
      items: [
        {
          id: 'cyber-realm',
          title: 'CyberRealm: Neon Siege',
          genre: 'Тактическо Sci-Fi RPG',
          description:
            'Киберпънк метрополис с динамичен вертикален паркур, многостепенни рейдове и постоянни битки на площ от 8 кв. километра.',
          aiContribution:
            'Процедурна градска геометрия с автоматична LOD оптимизация на полигоните и невронни поведенчески дървета за над 800 NPC единици.',
          analyticsContribution:
            'Разпределени AWS ECS сесийни нодове, свързани с Amazon DynamoDB за сигурно заключване на инвентара без риск от дюпликации.',
          ccu: '185,400',
          fps: '59.9 FPS',
          visits: '14.2M',
          tags: ['Невронни NPC', 'DynamoDB ACID', '60 FPS Tick'],
        },
        {
          id: 'chrono-tycoon',
          title: 'Chrono Tycoon: Deep Space',
          genre: 'Индустриален Икономически Симулатор',
          description:
            'Мултипланетарна минна империя, в която хиляди играчи търгуват редки руди през междусървърни орбитални борси.',
          aiContribution:
            'Автоматизирани алгоритми за валидация на Luau транзакции и процедурно генериране на планетни релефи за под 90 секунди.',
          analyticsContribution:
            'Amazon ElastiCache Redis клъстер, синхронизиращ движенията на пазарните цени в глобален мащаб със закъснение под 2ms.',
          ccu: '240,100',
          fps: '60.0 FPS',
          visits: '28.6M',
          tags: ['Без Дюпове', 'ElastiCache Redis', 'Глобална Икономика'],
        },
        {
          id: 'vortex-obby',
          title: 'Vortex Obby: Gravity Flux',
          genre: 'Адаптивен Процедурен Платформър',
          description:
            'Непрекъснато развиваща се писта с препятствия, чиито етапи се рекомбинират динамично според уменията на играча.',
          aiContribution:
            'Адаптивен ИИ балансьор на трудността, анализиращ скоростта на скачане в реално време за генериране на уникални трасета.',
          analyticsContribution:
            'AWS CloudFront edge телеметрия, записваща времената на контролните точки за незабавно засичане на ботове и експлойти.',
          ccu: '94,800',
          fps: '59.8 FPS',
          visits: '42.1M',
          tags: ['Адаптивен ИИ', 'CloudFront Edge', 'Zero-Lag'],
        },
        {
          id: 'aethelgard',
          title: 'Aethelgard: Guild Realms',
          genre: 'Мултиплейър Фентъзи Сендбокс',
          description:
            'Замъчни обсади, морско разширяване на територии и гилдийни икономики, свързващи взаимосвързани Roblox вселени.',
          aiContribution:
            'Дълбоко процедурно асемблиране на биоми с невронно LOD поточно предаване, поддържащо плавни кадри дори на мобилни устройства.',
          analyticsContribution:
            'AWS GameLift авто-мащабиране от 20 до 1,400 активни сървъра по време на уикенд турнири без нито едно прекъсване на играчите.',
          ccu: '132,500',
          fps: '59.9 FPS',
          visits: '18.4M',
          tags: ['AWS GameLift', 'Мобилна Оптимизация', 'Крос-Сървър'],
        },
      ],
    },
    features: {
      badge: 'Възможности на платформата',
      title: 'Всичко необходимо за създаване, мащабиране и издаване на Roblox игри',
      subtitle:
        'RbKing премахва бариерите пред разработката: от бавното ръчно моделиране до сривовете на сървърите при пиков наплив от играчи.',
      learnMore: 'Научете повече',
      cards: [
        {
          title: 'Невронно Генериране на Светове и Luau',
          description:
            'Синтез на вокселни терени, подземия, таблици с награди и Luau поведенчески логики за RPG, Tycoon, Obby и Battle Royale жанрове.',
          metric: '10x По-бързо',
        },
        {
          title: 'Облачна Мащабируемост с AWS',
          description:
            'Изключително надежден бекенд на AWS ECS, DynamoDB и ElastiCache Redis с автоматично хоризонтално контейнерно мащабиране.',
          metric: '99.99% Достъпност',
        },
        {
          title: 'Табло за Мониторинг на Производителността',
          description:
            'Телеметрия на живо, следяща 60 FPS честота на опресняване, памет, латентност и автоматично възстановяване при срив.',
          metric: 'Цел 60.0 FPS',
        },
        {
          title: 'Open Cloud CI/CD и Управление на Активи',
          description:
            'Автоматично компилиране, компресиране на геометрия и публикуване чрез Roblox Open Cloud API със сигурен откат за 3 секунди.',
          metric: 'Zero-Downtime Rollout',
        },
        {
          title: 'Съвместна Разработка в Реално Време',
          description:
            'Интелигентно сливане (Smart Merge), предотвратяващо презаписване на промени в Roblox Studio Explorer с общ каталог на активи.',
          metric: 'Live Workspace Sync',
        },
        {
          title: 'Гъвкав Билинг и Грантове от AWS',
          description:
            'Плащате само за реално изразходваните ресурси с пълна съвместимост за AWS Activate кредити от $25,000 до $100,000.',
          metric: 'AWS Activate Готовност',
        },
      ],
    },
    aiEngine: {
      badge: 'ИИ Генератор на Светове',
      title: 'Невронно Генериране на 3D Светове и Чиста Luau Архитектура',
      subtitle:
        'Създавайте пълноценни основи за игри за минути. Моделът генерира готов за продукция Luau код, процедурна геометрия и свързва AWS услуги.',
      statusReady: 'Готово за експорт в Studio',
      statusGenerating: 'Синтезиране на архитектура...',
      copyCode: 'Копиране на Luau скрипт',
      copied: 'Копирано в клипборда',
      exportedAssets: 'Генериран състав на плейса',
      awsInfrastructure: 'Свързани AWS услуги',
      targetCcu: 'Целеви CCU капацитет',
      safeCheck: 'Премината строга типизация на Luau и проверка за течове на памет',
    },
    awsCloud: {
      badge: 'AWS Startups Архитектура',
      title: 'Корпоративна AWS Архитектура: Създадена за Милиони Играчи',
      subtitle:
        'Roblox проектите изискват устойчив бекенд, независим от локалните ограничения на DataStore. Изградено според AWS Well-Architected Framework.',
      performanceTitle: 'Показатели за производителност и достъпност',
      integrationTitle: 'Интеграция с платформата Roblox',
      guarantee: 'Потвърдено от архитекти на AWS Startups Solutions',
      readyTag: 'Допустимо за AWS Activate',
    },
    monitoring: {
      badge: 'Телеметрия в Реално Време',
      title: 'Табло за Производителност на Игровите Сървъри',
      subtitle:
        'Пълна видимост над хиляди активни Roblox сесии. Проследявайте честотата на кадри (Tick Rate), разхода на RAM, закъснението и елиминирайте сривовете.',
      ccuTab: 'Активни играчи (CCU)',
      tickRateTab: 'Server Tick Rate',
      memoryTab: 'Консумация на RAM',
      latencyTab: 'Мрежово закъснение',
      peakDay: '24ч Пик:',
      stability: 'Стабилност: 99.98% сървъри на 60 FPS',
      robloxLimit: 'Roblox Лимит: 6,144 MB',
      route53: 'AWS Route 53 Edge: <25ms',
      telemetryStream: 'CloudWatch поток на живо (5s)',
      healingTitle: 'Интелигентно Самолекуващ се Бекенд',
      healingNotice: 'Всички инстанции са синхронизирани без разминаване във физиката.',
      cpuSavings: 'Намален сървърен товар: -42% CPU',
    },
    testimonials: {
      badge: 'Отзиви от Разработчици',
      title: 'Доверено от Водещи Roblox Студиа и Издатели',
      subtitle:
        'Научете как водещи студиа трансформират скоростта на разработка, стабилността на сървърите и разходите си чрез RbKing.',
      items: [
        {
          quote:
            'Интегрирането на процедурния пайплайн на RbKing съкрати цикъла ни за дизайн на нива от 7 месеца на едва 3 седмици. По време на лятното ни обновяване със 185,000 CCU, AWS ElastiCache и DynamoDB обработиха всяка транзакция без нито един загубен инвентар.',
          author: 'Маркъс Ванс',
          role: 'Технически Директор',
          studio: 'Hyperion Interactive',
          stat: '7 м. → 3 седм.',
          statLabel: 'Цикъл на левъл дизайн',
        },
        {
          quote:
            'Автоматизираният Open Cloud CI/CD и самолекуващият се мониторинг на tick rate спасиха студиото ни по време на пиковия трафик през уикенда. Пуснахме четири спешни ъпдейта без да разкачим нито един играч, запазвайки 60.0 FPS.',
          author: 'Елена Ростова',
          role: 'Съосновател и Главен Продуцент',
          studio: 'Nebula Game Labs',
          stat: '60.0 FPS',
          statLabel: 'Постоянна стабилност',
        },
        {
          quote:
            'Като динамично развиващо се Roblox студио, кандидатстващо за AWS Startups Activate, RbKing ни предостави готова корпоративна архитектура. Разходите ни за сървърна инфраструктура спаднаха с 38% благодарение на интелигентното авто-мащабиране.',
          author: 'Дейвид Чен',
          role: 'Ръководител Инфраструктура',
          studio: 'Vanguard Metaverse Studios',
          stat: '-38%',
          statLabel: 'Оптимизация на разходите',
        },
      ],
    },
    pricing: {
      badge: 'Прозрачен Билинг',
      title: 'Предвидимо ценообразуване според растежа на вашата игра',
      subtitle:
        'Плащате стриктно за изчислителни ресурси и невронна генерация. Напълно съвместимо с грантове от AWS Activate за старт без първоначален капитал.',
      calcTitle: 'Калкулатор на Облачната Инфраструктура AWS',
      calcSubtitle: 'Симулирайте точните ресурси, необходими за вашия плейс',
      awsGrantCover: 'Покрива се от AWS Activate кредити ($25k–$100k)',
      ccuSlider: 'Среден брой едновременни играчи (CCU):',
      visitsSlider: 'Месечни посещения на плейса:',
      computeHours: 'AWS Изчислителни часове:',
      openCloudCalls: 'Roblox Open Cloud Заявки:',
      estCost: 'Прогнозна месечна стойност',
      perMonth: '/ месец',
      autoScale: 'Динамично авто-мащабиране при скокове на трафика',
      zeroIdle: '0 плащане за неактивни часове през нощта',
      batchTransfer: 'Пакетни Open Cloud заявки без изчерпване на квотите',
      requestQuote: 'Заявете архитектурно изчисление',
      selectPlan: 'Изберете план',
      tiers: {
        indieTitle: 'Инди Студио',
        indieCcu: 'До 2,500 CCU',
        indieDesc: 'Идеално за стартиране на първия ви плейс и валидиране на задържането.',
        indiePrice: 'Безплатно',
        indiePeriod: 'по време на бета',
        proTitle: 'Studio Pro',
        proCcu: 'До 50,000 CCU',
        proDesc: 'За утвърдени студиа с редовни актуализации и мащабни мирове.',
        proPrice: '$149',
        proPeriod: '/ мес + потребление',
        entTitle: 'Enterprise Fleet',
        entCcu: '100,000+ CCU',
        entDesc: 'Специализиран Multi-AZ AWS клъстер с персонален архитектурен консултант.',
        entPrice: 'По запитване',
        entPeriod: 'персонализиран SLA',
        popularBadge: 'Най-популярен',
      },
    },
    contact: {
      badge: 'Ранен Достъп и AWS Startups Пилот',
      title: 'Свържете се с техническия екип на RbKing',
      subtitle:
        'Присъединете се към затворената бета за вашето Roblox студио. Одобрените участници получават съдействие за кандидатстване за до $100,000 в AWS Activate кредити.',
      fullNameLabel: 'Име и фамилия / Ръководител *',
      fullNamePlaceholder: 'Александър Иванов',
      emailLabel: 'Служебен Email адрес *',
      emailPlaceholder: 'alex@yourstudio.com',
      studioLabel: 'Име на студиото или линк към плейса *',
      studioPlaceholder: 'Apex Studios или линк към Roblox',
      messageLabel: 'Кратко съобщение и изисквания *',
      messagePlaceholder:
        'Опишете жанра на играта, целевия CCU и предизвикателствата с текущата инфраструктура...',
      inquiryLabel: 'Категория на запитването',
      inquiryOptions: {
        earlyAccess: 'Ранен бета достъп',
        awsPilot: 'AWS Startups Пилот',
        enterprise: 'Корпоративен клъстер',
      },
      submitButton: 'Свържете се с нас',
      submitting: 'Изпращане на данните...',
      privacyNotice: 'Гарантирана конфиденциалност. Данните ви не се споделят с трети лица.',
      successTitle: 'Запитването е регистрирано успешно',
      successRef: 'Идентификационен номер:',
      successBody:
        'Нашият AWS архитект и технически ръководител ще прегледат вашето запитване и ще се свържат с вас в рамките на 24 часа с тестови достъп.',
      submitAnother: 'Изпратете друго съобщение',
      errors: {
        nameRequired: 'Моля, въведете вашето име или никнейм',
        emailRequired: 'Моля, въведете вашия имейл адрес',
        emailInvalid: 'Моля, въведете валиден имейл формат',
        messageRequired: 'Моля, въведете кратко съобщение за проекта',
      },
    },
    footer: {
      brandDesc:
        'Следващо поколение ИИ и AWS облачен двигател за създатели на Roblox плейсове. Проектиран за безпроблемна мащабируемост, 60 FPS tick rate и автоматизиран Open Cloud деплой.',
      standardNotice:
        'Изградено според изискванията на AWS Well-Architected Framework & Roblox Open Cloud API Guidelines.',
      navProduct: 'Продукт',
      navCompany: 'Партньорство',
      privacy: 'Поверителност',
      terms: 'Условия за ползване',
      rights: 'Всички права запазени.',
    },
  },
};
