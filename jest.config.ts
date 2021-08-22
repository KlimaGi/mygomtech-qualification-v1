import { Config } from "@jest/types";

export const config: Config.InitialOptions = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  verbose: true,
};

// async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};
