export interface FraudSignal{velocity:number;chargebacks:number;failedPayments:number;accountAgeDays:number}
export function fraudScore(s:FraudSignal):number{return Math.min(100,s.velocity*5+s.chargebacks*20+s.failedPayments*5+(s.accountAgeDays<7?20:0));}
