export interface PasswordPolicy{minLength:number;requireUppercase:boolean;requireNumber:boolean;requireSymbol:boolean;}
export function passwordCompliant(pw:string,p:PasswordPolicy):boolean{return pw.length>=p.minLength&&(!p.requireUppercase||/[A-Z]/.test(pw))&&(!p.requireNumber||/[0-9]/.test(pw))&&(!p.requireSymbol||/[^A-Za-z0-9]/.test(pw));}
