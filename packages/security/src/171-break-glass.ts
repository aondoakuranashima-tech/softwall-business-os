export interface BreakGlassGrant{userId:string;reason:string;expiresAt:string;approvedBy:string;}
export function breakGlassActive(g:BreakGlassGrant,now=Date.now()):boolean{return!!g.reason&&!!g.approvedBy&&Date.parse(g.expiresAt)>now;}
