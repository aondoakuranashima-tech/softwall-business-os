export interface SessionRisk { ipChanged:boolean; deviceChanged:boolean; impossibleTravel:boolean; }
export function requiresReauth(r:SessionRisk):boolean{return r.impossibleTravel||r.ipChanged&&r.deviceChanged;}
