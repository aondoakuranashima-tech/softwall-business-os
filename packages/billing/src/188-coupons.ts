export interface Coupon { code:string; percentOff?:number; amountOffMinor?:number; expiresAt?:string; active:boolean; }
export function discountMinor(amount:number,c:Coupon,now=Date.now()):number{if(!c.active||c.expiresAt&&Date.parse(c.expiresAt)<=now)return 0;const percent=c.percentOff?amount*c.percentOff/100:0;return Math.min(amount,Math.max(percent,c.amountOffMinor??0));}
