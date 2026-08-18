export interface Organization{id:string;name:string;slug:string;status:'active'|'suspended'}
export interface Membership{organizationId:string;userId:string;role:string;}
export function tenantActive(o:Organization):boolean{return o.status==='active';}
