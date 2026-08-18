export type SoftwallEnvironment = 'development' | 'test' | 'staging' | 'production';

export type SoftwallConfig = {
  environment: SoftwallEnvironment;
  appName: string;
  apiBaseUrl: string;
  logLevel: string;
  databaseUrl?: string;
  redisUrl?: string;
};

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required configuration: ${name}`);
  return value;
}

export function loadConfig(): SoftwallConfig {
  const environment = (process.env.NODE_ENV ?? 'development') as SoftwallEnvironment;
  if (!['development', 'test', 'staging', 'production'].includes(environment)) {
    throw new Error(`Invalid NODE_ENV: ${environment}`);
  }
  return {
    environment,
    appName: required('SOFTWALL_APP_NAME'),
    apiBaseUrl: required('SOFTWALL_API_BASE_URL'),
    logLevel: process.env.LOG_LEVEL ?? (environment === 'production' ? 'info' : 'debug'),
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
  };
}
