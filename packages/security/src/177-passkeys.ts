export interface PasskeyCredential { id:string; userId:string; credentialId:string; publicKey:string; counter:number; }
export function validatePasskey(c:PasskeyCredential):void{if(!c.userId||!c.credentialId||!c.publicKey||c.counter<0)throw new Error('INVALID_PASSKEY');}
