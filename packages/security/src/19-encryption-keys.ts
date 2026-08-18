export interface KeyRecord{id:string;version:number;algorithm:string;active:boolean}
export function activeEncryptionKey(keys:KeyRecord[]):KeyRecord|undefined{return keys.filter(k=>k.active).sort((a,b)=>b.version-a.version)[0];}
