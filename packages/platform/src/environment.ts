export type EnvironmentName = 'development' | 'test' | 'staging' | 'production';
export interface EnvironmentConfig { name: EnvironmentName; region: string; serviceName: string; variables: Record<string, string>; }

const secretPattern = /(password|secret|token|private[_-]?key|api[_-]?key)/i;
export function validateEnvironment(config: EnvironmentConfig): void {
  if (!config.serviceName || !config.region) throw new Error('INVALID_ENVIRONMENT');
  for (const key of Object.keys(config.variables)) if (secretPattern.test(key) && config.variables[key].length < 8) throw new Error(`WEAK_SECRET:${key}`);
  if (config.name === 'production' && !config.variables.DATABASE_URL) throw new Error('PRODUCTION_DATABASE_REQUIRED');
}
