import type {AIProvider,AIRequest,AIResponse} from'./45-ai-core';
export class ModelGateway{constructor(private readonly providers:Record<string,AIProvider>){} generate(request:AIRequest):Promise<AIResponse>{const p=this.providers[request.model];if(!p)throw new Error(`MODEL_UNAVAILABLE:${request.model}`);return p.generate(request);}}
