export interface ThreatSignal{failedLogins:number;newDevice:boolean;newCountry:boolean;suspiciousIp:boolean}
export function threatScore(s:ThreatSignal):number{return Math.min(100,s.failedLogins*10+(s.newDevice?20:0)+(s.newCountry?20:0)+(s.suspiciousIp?40:0));}
