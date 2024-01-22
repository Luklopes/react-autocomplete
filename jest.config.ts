const fileRegex =
  "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$";

export default {
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "__coverage__",
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text-summary"],
  preset: "ts-jest",
  testMatch: ["**/tests/**/*.[jt]s?(x)"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    [fileRegex]: "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["dist"],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
