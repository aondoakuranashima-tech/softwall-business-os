import {createHash} from'node:crypto';
export interface SecretRef{key:string;version:number;active:boolean}
export function secretFingerprint(value:string):string{return createHash('sha256').update(value).digest('hex')}
