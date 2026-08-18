export interface IdempotencyStore { get(key: string): Promise<unknown>; set(key: string, value: unknown, ttlSeconds: number): Promise<void>; }

export async function withIdempotency<T>(store: IdempotencyStore, key: string, operation: () => Promise<T>, ttlSeconds = 86400): Promise<T> {
  const existing = await store.get(key);
  if (existing !== undefined) return existing as T;
  const result = await operation();
  await store.set(key, result, ttlSeconds);
  return result;
}
