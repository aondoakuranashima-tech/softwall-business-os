export interface Evaluation{caseId:string;score:number;passed:boolean;model:string;createdAt:string}
export function passRate(evals:Evaluation[]):number{return evals.length?evals.filter(e=>e.passed).length/evals.length:0}
