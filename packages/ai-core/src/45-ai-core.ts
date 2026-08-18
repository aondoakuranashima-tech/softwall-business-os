export interface AIRequest{tenantId:string;model:string;input:string;metadata?:Record<string,unknown>}
export interface AIResponse{output:string;model:string;usage?:{inputTokens:number;outputTokens:number}}
export interface AIProvider{generate(request:AIRequest):Promise<AIResponse>}
