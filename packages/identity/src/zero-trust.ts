export interface AccessRequest { userId: string; organizationId: string; deviceTrusted: boolean; mfaVerified: boolean; sessionActive: boolean; permissionGranted: boolean; }
export function evaluateZeroTrust(request: AccessRequest): boolean {
  return Boolean(request.userId && request.organizationId && request.deviceTrusted && request.mfaVerified && request.sessionActive && request.permissionGranted);
}
