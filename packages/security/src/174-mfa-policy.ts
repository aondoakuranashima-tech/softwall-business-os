export interface MfaPolicy{required:boolean;allowedFactors:('totp'|'webauthn'|'sms')[];}
export function mfaAllowed(factor:MfaPolicy['allowedFactors'][number],p:MfaPolicy):boolean{return(!p.required||p.allowedFactors.length>0)&&p.allowedFactors.includes(factor);}
