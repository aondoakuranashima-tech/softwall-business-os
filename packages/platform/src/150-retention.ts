export interface DataRetention{category:string;days:number;legalHold:boolean}
export function eligibleForDeletion(d:DataRetention):boolean{return d.days>0&&!d.legalHold}
