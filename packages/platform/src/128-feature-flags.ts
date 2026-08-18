export interface FeatureFlag{key:string;enabled:boolean;rolloutPercent:number;}
export function enabledFor(flag:FeatureFlag,stableId:string):boolean{if(!flag.enabled)return false;if(flag.rolloutPercent>=100)return true;if(flag.rolloutPercent<=0)return false;let h=0;for(const c of stableId)h=(h*31+c.charCodeAt(0))>>>0;return h%100<flag.rolloutPercent}
