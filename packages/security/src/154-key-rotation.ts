export interface KeyVersion { id:string; createdAt:string; active:boolean; }
export function activeKey(keys:KeyVersion[]):KeyVersion|undefined{return keys.find(k=>k.active);}
