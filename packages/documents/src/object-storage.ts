export interface ObjectStorage { bucket:string; key:string; region:string; encrypted:boolean; }
export function assertEncryptedObject(object:ObjectStorage):void { if(!object.bucket||!object.key||!object.region||!object.encrypted) throw new Error('UNSAFE_OBJECT'); }
