import type { AiProvider } from './core';
export interface ModelRoute { model: string; provider: string; priority: number; enabled: boolean; }
export class ModelRouter { private readonly routes: ModelRoute[] = []; addRoute(route: ModelRoute): void { this.routes.push(route); } resolve(): ModelRoute { const route = this.routes.filter((r) => r.enabled).sort((a, b) => a.priority - b.priority)[0]; if (!route) throw new Error('NO_AI_ROUTE'); return route; } }
export type ProviderMap = Map<string, AiProvider>;
