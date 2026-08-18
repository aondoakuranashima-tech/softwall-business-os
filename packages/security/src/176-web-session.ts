export interface WebSession { id:string; userId:string; createdAt:string; expiresAt:string; revoked:boolean; }
export function sessionActive(s:WebSession,now=Date.now()):boolean{return !s.revoked&&Date.parse(s.expiresAt)>now;}
