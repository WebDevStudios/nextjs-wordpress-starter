module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/functions(.*)$': '<rootDir>/functions$1'
  },
  testMatch: ['**/tests/jest/**/*.js?(x)'],
  testEnvironment: 'jsdom'
}
