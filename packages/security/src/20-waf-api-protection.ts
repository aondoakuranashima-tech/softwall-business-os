export interface ProtectionRule{method:string;path:string;maxBodyBytes:number;requireAuth:boolean}
export function requestAllowed(r:ProtectionRule,bodyBytes:number,authenticated:boolean):boolean{return bodyBytes>=0&&bodyBytes<=r.maxBodyBytes&&(!r.requireAuth||authenticated);}
