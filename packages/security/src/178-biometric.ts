export interface BiometricPolicy { enabled:boolean; requireUserVerification:boolean; }
export function biometricAllowed(p:BiometricPolicy,userVerified:boolean):boolean{return p.enabled&&(!p.requireUserVerification||userVerified);}
