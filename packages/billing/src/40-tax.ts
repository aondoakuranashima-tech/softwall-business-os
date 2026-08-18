export interface TaxRule{country:string;rate:number;inclusive:boolean}
export function taxMinor(net:number,r:TaxRule):number{return Math.max(0,Math.round(r.inclusive?net-(net/(1+r.rate/100)):net*r.rate/100));}
