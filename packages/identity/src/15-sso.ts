export interface SsoConnection{id:string;organizationId:string;protocol:'saml'|'oidc';issuer:string;enabled:boolean}
export function ssoReady(c:SsoConnection):boolean{return c.enabled&&!!c.issuer&&!!c.organizationId;}
