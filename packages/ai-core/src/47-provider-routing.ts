import type {AIProvider,AIRequest,AIResponse} from'./45-ai-core';
export interface ProviderRoute{name:string;provider:AIProvider;priority:number;enabled:boolean}
export async function routeAI(routes:ProviderRoute[],request:AIRequest):Promise<AIResponse>{for(const r of routes.filter(x=>x.enabled).sort((a,b)=>a.priority-b.priority)){try{return await r.provider.generate(request)}catch{}}throw new Error('NO_AI_PROVIDER_AVAILABLE');}
