export interface ServiceAccount { id:string; organizationId:string; name:string; active:boolean; scopes:string[]; }
export function canServiceAccount(a:ServiceAccount,scope:string):boolean{return a.active&&(a.scopes.includes('*')||a.scopes.includes(scope));}
