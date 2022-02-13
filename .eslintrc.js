module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      standard,
      prettier,
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'react-hooks'],
   rules: {
      'react-hooks/exhaustive-deps': 'off',
   },
};
