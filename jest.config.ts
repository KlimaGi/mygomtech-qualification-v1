import type { Config } from "@jest/types";

// Sync object
export const config: Config.InitialOptions = {
  verbose: true,
};

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};

module.exports = {
  roots: ["<rootDir>/src"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extended-expect"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
