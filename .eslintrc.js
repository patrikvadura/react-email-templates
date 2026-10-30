module.exports = {
  root: true,
  extends: [],
  ignorePatterns: ['node_modules/', '.react-email/', 'out/'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
}
