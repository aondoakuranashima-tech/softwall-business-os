export interface Trial { organizationId:string; startsAt:string; endsAt:string; converted:boolean; }
export function trialActive(t:Trial,now=Date.now()):boolean{return !t.converted&&Date.parse(t.endsAt)>now;}
