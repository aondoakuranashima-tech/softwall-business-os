export interface Route{method:string;path:string;service:string;authRequired:boolean}
export function resolveRoute(routes:Route[],method:string,path:string):Route|undefined{return routes.find(r=>r.method===method&&r.path===path)}
