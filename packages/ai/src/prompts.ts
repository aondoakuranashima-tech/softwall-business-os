export interface PromptTemplate { id:string; version:number; template:string; active:boolean; }
export function renderPrompt(prompt:PromptTemplate, vars:Record<string,string>):string { if(!prompt.active) throw new Error('PROMPT_INACTIVE'); return prompt.template.replace(/\{\{(\w+)\}\}/g,(_,k)=>vars[k]??''); }
