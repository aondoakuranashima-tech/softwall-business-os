export interface AiUsage { organizationId:string; model:string; inputTokens:number; outputTokens:number; costMinor:number; }
export function totalAiCost(records:AiUsage[]):number { return records.reduce((sum,r)=>{if(r.inputTokens<0||r.outputTokens<0||r.costMinor<0) throw new Error('INVALID_AI_USAGE');return sum+r.costMinor;},0); }
