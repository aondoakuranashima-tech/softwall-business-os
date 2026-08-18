export interface PolicyControl{id:string;name:string;owner:string;evidenceRefs:string[];status:'planned'|'implemented'|'tested';}
export function controlReady(c:PolicyControl):boolean{return c.status==='tested'&&c.evidenceRefs.length>0;}
