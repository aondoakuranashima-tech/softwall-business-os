export interface Entitlement { organizationId:string; feature:string; limit?:number; enabled:boolean; }
export function entitled(e:Entitlement,usage=0):boolean{return e.enabled&&(e.limit===undefined||usage<e.limit);}
