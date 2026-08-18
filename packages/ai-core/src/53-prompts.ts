export interface PromptVersion{id:string;name:string;version:number;template:string;active:boolean;createdAt:string}
export function activePrompt(versions:PromptVersion[],name:string):PromptVersion|undefined{return versions.filter(v=>v.name===name&&v.active).sort((a,b)=>b.version-a.version)[0]}
