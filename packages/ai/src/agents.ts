export interface AgentDefinition { id: string; name: string; systemPrompt: string; tools: string[]; enabled: boolean; }
export function validateAgent(agent: AgentDefinition): void { if (!agent.id || !agent.name || !agent.systemPrompt || !agent.enabled) throw new Error('INVALID_AGENT'); }
