export interface ServiceEndpoint { name: string; url: string; healthy: boolean; metadata?: Record<string, string>; }

export class ServiceRegistry {
  private readonly services = new Map<string, ServiceEndpoint>();
  register(endpoint: ServiceEndpoint): void { this.services.set(endpoint.name, endpoint); }
  setHealth(name: string, healthy: boolean): void { const service = this.services.get(name); if (!service) throw new Error('SERVICE_NOT_FOUND'); this.services.set(name, { ...service, healthy }); }
  resolve(name: string): ServiceEndpoint { const service = this.services.get(name); if (!service || !service.healthy) throw new Error('SERVICE_UNAVAILABLE'); return service; }
}
