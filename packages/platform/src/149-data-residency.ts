export interface ResidencyRule{region:string;allowedRegions:string[];}
export function canStore(rule:ResidencyRule,targetRegion:string):boolean{return rule.allowedRegions.includes(targetRegion)}
