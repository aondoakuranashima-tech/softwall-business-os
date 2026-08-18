export interface PrivilegedGrant{userId:string;permission:string;reason:string;expiresAt:string;approvedBy:string}
export function grantActive(g:PrivilegedGrant,now=Date.now()):boolean{return!!g.userId&&!!g.reason&&!!g.approvedBy&&Date.parse(g.expiresAt)>now;}
