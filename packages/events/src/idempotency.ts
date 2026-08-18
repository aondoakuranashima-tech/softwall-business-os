export class IdempotencyStore{private keys=new Set<string>();claim(key:string):boolean{if(this.keys.has(key))return false;this.keys.add(key);return true;}}
