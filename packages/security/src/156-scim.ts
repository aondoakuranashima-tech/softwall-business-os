export interface ScimConfig { organizationId:string; endpoint:string; enabled:boolean; }
export function scimReady(c:ScimConfig):boolean{return c.enabled&&!!c.organizationId&&c.endpoint.startsWith('https://');}
