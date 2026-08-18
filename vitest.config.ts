import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['packages/**/*.test.ts', 'apps/**/*.test.ts', 'services/**/*.test.ts'],
    exclude: ['node_modules/**', 'dist/**', 'build/**'],
    coverage: {
      provider: 'v8',
      include: [
        'packages/security/src/security-policy.ts',
        'packages/security/src/audit.ts',
      ],
      reporter: ['text', 'json-summary'],
      thresholds: {lines: 80, functions: 80, branches: 75, statements: 80},
    },
  },
});
