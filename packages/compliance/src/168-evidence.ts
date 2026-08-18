export interface Evidence{id:string;controlId:string;type:string;uri:string;collectedAt:string;expiresAt?:string;}
export function evidenceValid(e:Evidence,now=Date.now()):boolean{return!!e.uri&&(!e.expiresAt||Date.parse(e.expiresAt)>now);}
