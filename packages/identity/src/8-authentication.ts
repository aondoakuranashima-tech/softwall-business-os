import {scryptSync,timingSafeEqual} from'node:crypto';
export function hashPassword(password:string):string{const salt=crypto.randomUUID();return `${salt}:${scryptSync(password,salt,32).toString('hex')}`;}
export function verifyPassword(password:string,stored:string):boolean{const [salt,hash]=stored.split(':');if(!salt||!hash)return false;const actual=scryptSync(password,salt,32);const expected=Buffer.from(hash,'hex');return actual.length===expected.length&&timingSafeEqual(actual,expected);}
