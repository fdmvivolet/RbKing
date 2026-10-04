# RbKing · Next-Gen AI & AWS Cloud Engine for Roblox Places

> Intelligent AWS cloud infrastructure and neural generation for large-scale Roblox experiences. Built to comply with AWS Startups / AWS Activate ecosystem standards.

![RbKing Architecture](https://img.shields.io/badge/Architecture-AWS%20Startups%20Ready-white?style=flat-square)
![Roblox Open Cloud](https://img.shields.io/badge/Roblox-Open%20Cloud%20API-white?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-white?style=flat-square)
![React](https://img.shields.io/badge/React-19-white?style=flat-square)

---

## Overview

**RbKing** bridges the gap between high-velocity Roblox place development and enterprise-grade cloud reliability. It equips game studios with:
- **Neural World & Script Synthesis**: Procedural voxel landscapes, dynamic LOD geometry, and type-checked Luau 5.1 scripts for RPG, Tycoon, Obby, Battle Royale, and Simulation genres.
- **AWS Startups Architecture**: Resilient multi-AZ backend utilizing AWS EKS & Fargate, Amazon DynamoDB Global Tables, and Amazon ElastiCache Redis for sub-millisecond inventory and cross-server session locking.
- **Real-Time Telemetry & Self-Healing**: Live server tick rate (60 FPS target), RAM consumption, network latency monitoring, and automated shard scaling.
- **Automated Open Cloud CI/CD**: Git webhook $\rightarrow$ AI mesh compression $\rightarrow$ Open Cloud v2 place publishing with automated 3-second rollback on performance degradation.
- **Multi-Creator Studio Collaboration**: Smart merge algorithms for Roblox Studio Explorer and shared asset registry.
- **Bilingual Interface**: Full localization support for English (`EN`) and Bulgarian (`BG`).
- **2026 Architectural Minimalist Aesthetics**: Monolithic border-grid layouts, luxury editorial typography (`Cinzel`), high-contrast monochrome design, and 60 FPS ambient background animation.

---

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Architectural Themes
- **Typography**: Cinzel + Plus Jakarta Sans + JetBrains Mono
- **Icons**: Lucide React
- **Cloud Reference**: AWS Well-Architected Framework (EKS, DynamoDB, ElastiCache, Lambda, CloudWatch)

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or bun

### Installation

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/rbking-roblox-cloud.git
cd rbking-roblox-cloud

# 2. Install dependencies
npm install

# 3. Launch development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
├── index.html                   # Entry point with Cinzel & Plus Jakarta Sans typography
├── src/
│   ├── App.tsx                  # Main assembly & section controller
│   ├── translations.ts          # Centralized EN/BG bilingual dictionary
│   ├── types.ts                 # Shared TypeScript interfaces
│   ├── index.css                # Tailwind CSS v4 styling & architectural grids
│   └── components/
│       ├── LuxuryBackground.tsx # 60 FPS HTML5 canvas background animation
│       ├── Navbar.tsx           # 3-zone architectural top navigation
│       ├── Hero.tsx             # Proposition & live telemetry console
│       ├── ProjectsShowcase.tsx # Flagship Roblox experiences showcase
│       ├── FeatureHighlights.tsx# Monolithic capabilities bento
│       ├── InteractiveAIGenerator.tsx # Interactive Luau & place generator
│       ├── AwsArchitecture.tsx  # AWS Startups infrastructure breakdown
│       ├── InteractiveDashboard.tsx # Live server telemetry & health graphs
│       ├── RobloxDeployPipeline.tsx # Open Cloud CI/CD automation simulator
│       ├── CollabFeatures.tsx   # Studio multiplayer netcode & collaboration
│       ├── Testimonials.tsx     # Game studio developer testimonials
│       ├── PricingCalculator.tsx# Unit economics & AWS Activate calculator
│       ├── ContactForm.tsx      # Early access & inquiry form
│       └── Footer.tsx           # Monolithic quiet footer
```

---

## License

Apache-2.0 © 2026 RbKing Technologies. All rights reserved.
