export interface ScimConfig{organizationId:string;endpoint:string;tokenRef:string;enabled:boolean}
export function scimReady(c:ScimConfig):boolean{return c.enabled&&!!c.organizationId&&!!c.tokenRef&&c.endpoint.startsWith('https://');}
