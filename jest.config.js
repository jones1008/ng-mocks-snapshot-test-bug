module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  cacheDirectory: './.jest',
  coverageReporters: ['html', 'text'],
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  }
};
