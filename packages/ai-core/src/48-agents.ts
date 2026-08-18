export interface Agent{ id:string;name:string;systemPrompt:string;tools:string[];enabled:boolean }
export function agentAvailable(a:Agent):boolean{return a.enabled&&!!a.id&&!!a.systemPrompt;}
