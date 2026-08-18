export interface VendorRisk{vendorId:string;score:number;reviewedAt:string;approved:boolean;}
export function vendorApproved(v:VendorRisk,minScore=70):boolean{return v.approved&&v.score>=minScore;}
