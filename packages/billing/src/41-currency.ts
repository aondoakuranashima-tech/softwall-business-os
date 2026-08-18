export interface Currency{code:string;minorUnit:number;enabled:boolean}
export function normalizeMinor(amount:number,c:Currency):number{if(!c.enabled||amount<0)throw new Error('INVALID_CURRENCY_AMOUNT');return Math.round(amount*10**c.minorUnit);}
