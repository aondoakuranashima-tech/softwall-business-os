export interface IpPolicy { organizationId:string; allow:string[]; deny:string[]; }
export function ipAllowed(ip:string,p:IpPolicy):boolean{if(p.deny.includes(ip))return false;return p.allow.length===0||p.allow.includes(ip);}
