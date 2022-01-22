export default {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  errorOnDeprecated: true,
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  }  
};
