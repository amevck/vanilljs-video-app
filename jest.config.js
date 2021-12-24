module.exports = {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testTimeout: 30000,
};
