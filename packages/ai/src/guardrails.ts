export interface GuardrailResult { allowed:boolean; reasons:string[]; }
export function applyGuardrails(text:string,maxLength:number):GuardrailResult { const reasons:string[]=[]; if(text.length>maxLength) reasons.push('OUTPUT_TOO_LONG'); if(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(text)) reasons.push('CONTROL_CHARACTERS'); return {allowed:reasons.length===0,reasons}; }
