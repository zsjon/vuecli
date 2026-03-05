// //1. 기존 create-vue로 생성된 Vue 공식 프리셋 eslint.
// import { globalIgnores } from 'eslint/config'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
// import pluginPlaywright from 'eslint-plugin-playwright'
// import pluginVitest from '@vitest/eslint-plugin'
// import pluginOxlint from 'eslint-plugin-oxlint'
// import skipFormatting from 'eslint-config-prettier/flat'

// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// // import { configureVueProject } from '@vue/eslint-config-typescript'
// // configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// // More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{vue,ts,mts,tsx}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   ...pluginVue.configs['flat/essential'],
//   vueTsConfigs.recommended,

//   {
//     ...pluginPlaywright.configs['flat/recommended'],
//     files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
//   },

//   {
//     ...pluginVitest.configs.recommended,
//     files: ['src/**/__tests__/*'],
//   },

//   ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

//   skipFormatting,
// )

//2. pms-client 프로젝트에 설정된 eslint.
// eslint.config.ts
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import ts from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default [
  /* =========================
   *  Ignore
   * ========================= */
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'public/**', 'coverage/**'],
  },

  /* =========================
   *  Base
   * ========================= */
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  /* =========================
   *  Common rules (JS / TS)
   * ========================= */
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  /* =========================
   *  Vue (.vue)
   * ========================= */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'vue/no-mutating-props': 'error',
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
  },
  prettier,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  },
]
