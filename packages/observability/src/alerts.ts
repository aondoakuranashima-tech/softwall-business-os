export interface AlertRule{name:string;metric:string;threshold:number;operator:'gt'|'gte'|'lt'|'lte';enabled:boolean;}
export function evaluateAlert(rule:AlertRule,value:number):boolean{if(!rule.enabled)return false;switch(rule.operator){case'gt':return value>rule.threshold;case'gte':return value>=rule.threshold;case'lt':return value<rule.threshold;case'lte':return value<=rule.threshold;}}
