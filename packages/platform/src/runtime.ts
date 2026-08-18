export interface PlatformRuntime { requestId: string; startedAt: number; }
export function createRuntime(requestId = crypto.randomUUID()): PlatformRuntime { return { requestId, startedAt: Date.now() }; }
export function elapsedMs(runtime: PlatformRuntime): number { return Date.now() - runtime.startedAt; }
