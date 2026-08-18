import type { Evaluation } from './evaluations';
import { scoreEvaluation } from './evaluations';
export function summarizeEvaluations(items:Evaluation[]):{count:number;average:number} { const scores=items.map(scoreEvaluation); return {count:items.length,average:scores.length?scores.reduce((a,b)=>a+b,0)/scores.length:0}; }
