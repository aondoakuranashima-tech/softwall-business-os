export interface AiSpan { requestId:string; model:string; startedAt:number; endedAt?:number; inputTokens?:number; outputTokens?:number; error?:string; }
export function finishSpan(span:AiSpan,usage?:{inputTokens:number;outputTokens:number}):AiSpan { return {...span,...usage,endedAt:Date.now()}; }
