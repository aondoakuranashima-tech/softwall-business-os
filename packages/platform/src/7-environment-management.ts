export type Environment='development'|'test'|'staging'|'production';
export interface EnvironmentConfig{name:string;environment:Environment;locked:boolean;}
export function canMutate(c:EnvironmentConfig):boolean{return !c.locked&&c.environment!=='production';}
