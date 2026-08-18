# Softwall Secrets Management

Capability #4 establishes the suite-wide secret-management contract.

## Rules

- No secrets, API keys, private keys, tokens, passwords, or production credentials in Git.
- `.env.example` contains names/placeholders only.
- Development secrets may be supplied through local untracked `.env` files.
- CI/CD secrets must come from the CI secret store.
- Production secrets must come from the deployment/platform secret manager.
- Secrets must be rotated and scoped to the minimum required service permissions.
- Applications must fail closed when required production secrets are missing.

## Required controls

1. Secret scanning in CI.
2. Production secret injection at runtime.
3. Rotation procedure without source-code changes.
4. Separate credentials per environment.
5. Least-privilege credentials.
6. No secret values in logs, telemetry, error responses, or audit events.

This contract is shared by all Softwall products; product-specific secrets remain product-owned.