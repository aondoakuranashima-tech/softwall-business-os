export interface RiskSignals { failedLogins:number; newDevice:boolean; newCountry:boolean; }
export function riskScore(s:RiskSignals):number{return Math.min(100,s.failedLogins*10+(s.newDevice?25:0)+(s.newCountry?25:0));}
