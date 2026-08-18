export interface WorkflowStep{name:string;run:(input:unknown)=>Promise<unknown>}
export async function runWorkflow(steps:WorkflowStep[],input:unknown):Promise<unknown>{let value=input;for(const step of steps)value=await step.run(value);return value}
