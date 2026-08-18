export interface Flag{key:string;enabled:boolean;rolloutPercent:number}
export function flagEnabled(f:Flag,stableId:string):boolean{if(!f.enabled)return false;if(f.rolloutPercent>=100)return true;if(f.rolloutPercent<=0)return false;let h=0;for(const c of stableId)h=(h*31+c.charCodeAt(0))>>>0;return h%100<f.rolloutPercent;}
