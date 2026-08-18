export interface ComplianceControl{id:string;name:string;framework:string;owner:string;evidenceRefs:string[];status:'planned'|'implemented'|'tested'}
export function controlCompliant(c:ComplianceControl):boolean{return c.status==='tested'&&c.evidenceRefs.length>0&&!!c.owner;}
