export interface RateLimit{limit:number;windowSeconds:number}
export function allow(count:number,rule:RateLimit):boolean{return count<rule.limit&&rule.windowSeconds>0}
