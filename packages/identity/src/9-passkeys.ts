export interface Passkey{credentialId:string;userId:string;publicKey:string;counter:number}
export function validatePasskey(p:Passkey):void{if(!p.credentialId||!p.userId||!p.publicKey||p.counter<0)throw new Error('INVALID_PASSKEY');}
