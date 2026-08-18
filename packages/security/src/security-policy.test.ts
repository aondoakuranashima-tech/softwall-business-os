import {describe, expect, it} from 'vitest';
import {evaluateSecurity} from './security-policy';

describe('security policy', () => {
  const policy = {requireAuthentication: true, allowedActions: ['read:business'] as const};

  it('allows an authenticated tenant-scoped request', () => {
    expect(evaluateSecurity({authenticated:true, tenantId:'t1', userId:'u1', action:'read:business', resource:'business'}, policy)).toBe('allow');
  });

  it('denies unauthenticated requests', () => {
    expect(evaluateSecurity({authenticated:false, tenantId:'t1', userId:'u1', action:'read:business', resource:'business'}, policy)).toBe('deny');
  });

  it('denies requests without tenant or user context', () => {
    expect(evaluateSecurity({authenticated:true, action:'read:business', resource:'business'}, policy)).toBe('deny');
  });

  it('denies actions outside the policy', () => {
    expect(evaluateSecurity({authenticated:true, tenantId:'t1', userId:'u1', action:'delete:business', resource:'business'}, policy)).toBe('deny');
  });
});
