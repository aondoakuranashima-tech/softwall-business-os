export interface ApiVersion{version:string;deprecated:boolean;sunsetAt?:string}
export function isSupported(v:ApiVersion,now=Date.now()):boolean{return!v.deprecated||!v.sunsetAt||Date.parse(v.sunsetAt)>now}
