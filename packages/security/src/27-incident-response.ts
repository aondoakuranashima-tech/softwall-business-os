export type IncidentStatus='open'|'contained'|'resolved';
export interface SecurityIncident{id:string;severity:'low'|'medium'|'high'|'critical';status:IncidentStatus;detectedAt:string;ownerId?:string;}
export function incidentActive(i:SecurityIncident):boolean{return i.status!=='resolved';}
