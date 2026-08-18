export interface Metric{name:string;value:number;timestamp:number;labels?:Record<string,string>;}
export class MetricRegistry{private values=new Map<string,number>();inc(name:string,value=1):void{this.values.set(name,(this.values.get(name)??0)+value);}get(name:string):number{return this.values.get(name)??0;}}
