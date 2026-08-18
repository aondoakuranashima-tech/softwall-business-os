export type MfaFactor='totp'|'webauthn'|'sms';
export interface MfaPolicy{required:boolean;allowed:MfaFactor[]}
export function factorAllowed(f:MfaFactor,p:MfaPolicy):boolean{return p.allowed.includes(f)&&(p.required||p.allowed.length>0);}
