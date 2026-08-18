export interface Policy{effect:'allow'|'deny';action:string;resource:string;conditions:Record<string,string>}
export function policyMatches(p:Policy,action:string,resource:string,attributes:Record<string,string>):boolean{if(p.action!==action||p.resource!==resource)return false;return Object.entries(p.conditions).every(([k,v])=>attributes[k]===v);}
