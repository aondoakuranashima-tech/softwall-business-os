export interface RateLimitRule{limit:number;windowSeconds:number}
export function rateAllowed(count:number,r:RateLimitRule):boolean{return r.limit>0&&r.windowSeconds>0&&count<r.limit;}
