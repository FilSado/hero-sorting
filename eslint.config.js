import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  {
    plugins: {
      jest: jestPlugin,
    },
    files: ["/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,  // Глобальные переменные браузера (window, document, и т.д.)
        ...globals.node,     // Глобальные переменные Node.js (process, module, и т.д.)
        ...jestPlugin.environments.globals, // Глобальные переменные Jest (describe, it, expect)
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      ...jestPlugin.configs.recommended.rules,
    },
  },
];
