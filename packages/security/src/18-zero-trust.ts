export interface TrustContext{authenticated:boolean;deviceTrusted:boolean;networkTrusted:boolean;stepUpRequired:boolean}
export function allowRequest(c:TrustContext):boolean{return c.authenticated&&c.deviceTrusted&&c.networkTrusted&&!c.stepUpRequired;}
