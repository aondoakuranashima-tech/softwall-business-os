export interface DocumentWorkflow { id:string; organizationId:string; name:string; steps:string[]; active:boolean; }
export function nextWorkflowStep(workflow:DocumentWorkflow,current?:string):string|undefined { if(!workflow.active) throw new Error('WORKFLOW_INACTIVE'); if(!current) return workflow.steps[0]; const i=workflow.steps.indexOf(current); return i>=0?workflow.steps[i+1]:undefined; }
