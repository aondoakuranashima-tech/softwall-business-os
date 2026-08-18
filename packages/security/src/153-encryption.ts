export interface EncryptionPolicy { atRest:boolean; inTransit:boolean; keyVersion:number; }
export function encryptionReady(p:EncryptionPolicy):boolean{return p.atRest&&p.inTransit&&p.keyVersion>0;}
