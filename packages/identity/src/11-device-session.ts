export interface Session{ id:string;userId:string;deviceId:string;expiresAt:string;revoked:boolean }
export function sessionActive(s:Session,now=Date.now()):boolean{return!s.revoked&&Date.parse(s.expiresAt)>now;}
