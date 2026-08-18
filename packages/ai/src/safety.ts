export interface SafetyPolicy { blockedTerms:string[]; maxPromptLength:number; }
export function validateAiInput(prompt:string,policy:SafetyPolicy):void { if(prompt.length>policy.maxPromptLength) throw new Error('PROMPT_TOO_LONG'); const lower=prompt.toLowerCase(); if(policy.blockedTerms.some(t=>lower.includes(t.toLowerCase()))) throw new Error('AI_INPUT_BLOCKED'); }
