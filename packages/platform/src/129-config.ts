export interface ConfigValue{key:string;value:string;secret:boolean;required:boolean}
export function requireConfig(values:ConfigValue[],key:string):string{const v=values.find(x=>x.key===key);if(!v||!v.value)throw new Error(`CONFIG_MISSING:${key}`);return v.value}
