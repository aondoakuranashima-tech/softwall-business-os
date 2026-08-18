export interface AiRequest { organizationId: string; userId: string; prompt: string; model: string; }
export interface AiResponse { requestId: string; model: string; output: string; usage?: { inputTokens: number; outputTokens: number }; }
export interface AiProvider { generate(request: AiRequest): Promise<AiResponse>; }
