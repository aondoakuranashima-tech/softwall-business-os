export interface GuardrailResult{allowed:boolean;reasons:string[]}
export function applyGuardrails(input:string,blockedPatterns:RegExp[]):GuardrailResult{const reasons=blockedPatterns.filter(p=>p.test(input)).map(p=>`BLOCKED:${p.source}`);return{allowed:reasons.length===0,reasons}}
