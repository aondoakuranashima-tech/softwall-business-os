export interface UsageTier{unit:string;included:number;pricePerUnitMinor:number}
export function usageCharge(usage:number,t:UsageTier):number{return Math.max(0,usage-t.included)*t.pricePerUnitMinor;}
