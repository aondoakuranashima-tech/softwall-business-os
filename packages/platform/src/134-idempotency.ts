export class IdempotencyKeys{private keys=new Set<string>();claim(key:string):boolean{if(!key)return false;if(this.keys.has(key))return false;this.keys.add(key);return true}}
