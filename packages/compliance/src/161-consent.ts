export interface Consent { userId:string; purpose:string; granted:boolean; version:string; timestamp:string; }
export function hasConsent(consents:Consent[],userId:string,purpose:string,version:string):boolean{return consents.some(c=>c.userId===userId&&c.purpose===purpose&&c.version===version&&c.granted);}
