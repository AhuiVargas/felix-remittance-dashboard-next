// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project root
});

const customJestConfig = {
  // Setup files to configure Jest before running tests
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Map module paths based on tsconfig.json
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Use jsdom for a browser-like environment
  testEnvironment: 'jest-environment-jsdom',

  // Transform files to handle JavaScript, JSX, TypeScript, and TSX
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};

module.exports = createJestConfig(customJestConfig);
