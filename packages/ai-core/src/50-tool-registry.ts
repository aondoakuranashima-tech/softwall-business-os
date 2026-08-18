export interface ToolDefinition{name:string;description:string;inputSchema:Record<string,unknown>;requiredPermission:string;handler:(input:unknown)=>Promise<unknown>}
export class ToolRegistry{private tools=new Map<string,ToolDefinition>();register(t:ToolDefinition):void{this.tools.set(t.name,t)}get(name:string):ToolDefinition|undefined{return this.tools.get(name)}}
