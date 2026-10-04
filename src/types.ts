export type GameGenre = 'rpg' | 'tycoon' | 'obby' | 'battleroyale' | 'simulation';

export interface PlaceTelemetry {
  id: string;
  name: string;
  genre: GameGenre;
  ccu: number;
  maxCcu: number;
  tickRate: number;
  memoryMb: number;
  avgPingMs: number;
  crashRatePercent: number;
  awsRegion: string;
  status: 'healthy' | 'warning' | 'deploying';
}

export interface DeploymentLog {
  id: string;
  step: string;
  status: 'success' | 'running' | 'pending';
  timestamp: string;
  details: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  studioName: string;
  robloxProfile: string;
  teamSize: string;
  genre: string;
  monthlyVisits: string;
  inquiryType: 'early_access' | 'aws_startups_pilot' | 'enterprise';
  message: string;
}
