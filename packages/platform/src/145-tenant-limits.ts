export interface TenantLimit{organizationId:string;metric:string;limit:number;}
export function withinTenantLimit(current:number,limit:TenantLimit):boolean{return limit.limit>=0&&current<=limit.limit}
