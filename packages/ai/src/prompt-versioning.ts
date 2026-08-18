import type { PromptTemplate } from './prompts';
export function nextPromptVersion(history:PromptTemplate[]):number { return history.reduce((max,p)=>Math.max(max,p.version),0)+1; }
