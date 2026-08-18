import { randomBytes, createHash } from 'node:crypto';
export function createApiKey(prefix='sw'):string{return `${prefix}_${randomBytes(24).toString('base64url')}`;}
export function hashApiKey(key:string):string{return createHash('sha256').update(key).digest('hex');}
