import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
     displayName: {
     name: "queue_dog_tests",
     color: "greenBright",
   },
   verbose: true,
   reporters: ['default'],
//   setupFiles: ["dotenv/config"],
   testMatch: ["**/**/*.test.ts"],
   testEnvironment: "jsdom",
   detectOpenHandles: true,
   collectCoverage: true,
   transform: { "^.+\\.tsx?$": "ts-jest" },
  // globalTeardown: "<rootDir>/src/tests/jest-globals-teardown.ts",
   forceExit: true,
 };
};  



