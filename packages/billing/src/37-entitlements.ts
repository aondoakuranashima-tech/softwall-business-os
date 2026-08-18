export interface Entitlement{organizationId:string;feature:string;enabled:boolean;limit?:number}
export function entitled(e:Entitlement,usage=0):boolean{return e.enabled&&(e.limit===undefined||usage<e.limit);}
