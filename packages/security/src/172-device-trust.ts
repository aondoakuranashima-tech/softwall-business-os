export interface DeviceTrust{deviceId:string;userId:string;trusted:boolean;verifiedAt:string;}
export function trustedDevice(d:DeviceTrust):boolean{return d.trusted;}
