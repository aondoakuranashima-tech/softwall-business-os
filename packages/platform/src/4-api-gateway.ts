export interface GatewayRoute { method:string; path:string; service:string; authRequired:boolean; }
export function matchRoute(routes:GatewayRoute[],method:string,path:string):GatewayRoute|undefined{return routes.find(r=>r.method===method&&r.path===path);}
