export interface GatewayRequest { method: string; path: string; headers: Record<string, string>; organizationId?: string; }
export interface GatewayRoute { method: string; pattern: RegExp; service: string; authRequired: boolean; }

export class ApiGateway {
  private readonly routes: GatewayRoute[] = [];
  addRoute(route: GatewayRoute): void { this.routes.push(route); }
  resolve(request: GatewayRequest): GatewayRoute {
    const route = this.routes.find((r) => r.method === request.method && r.pattern.test(request.path));
    if (!route) throw new Error('ROUTE_NOT_FOUND');
    if (route.authRequired && !request.organizationId) throw new Error('AUTH_REQUIRED');
    return route;
  }
}
