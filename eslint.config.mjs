import tseslint from 'typescript-eslint';

export default [
  { ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**', 'coverage/**', 'eslint.config.mjs'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
