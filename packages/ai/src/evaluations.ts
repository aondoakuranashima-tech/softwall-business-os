export interface Evaluation { id:string; name:string; input:string; expected:string; actual?:string; score?:number; }
export function scoreEvaluation(e:Evaluation):number { if(e.actual===undefined) return 0; return e.actual.trim()===e.expected.trim()?1:0; }
