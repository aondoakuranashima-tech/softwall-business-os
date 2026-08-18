export interface SecurityIncident{id:string;severity:'low'|'medium'|'high'|'critical';status:'open'|'contained'|'resolved';detectedAt:string;}
export function incidentActive(i:SecurityIncident):boolean{return i.status!=='resolved';}
