export interface AgentPermission { agentId: string; userId: string; organizationId: string; allowedTools: string[]; }
export function canUseTool(permission: AgentPermission, tool: string): boolean { return permission.allowedTools.includes('*') || permission.allowedTools.includes(tool); }
