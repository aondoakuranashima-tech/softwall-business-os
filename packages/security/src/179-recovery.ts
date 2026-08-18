export interface RecoveryCode { id:string; userId:string; hash:string; used:boolean; }
export function usableRecoveryCode(c:RecoveryCode):boolean{return !!c.hash&&!c.used;}
