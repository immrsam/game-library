// src/global.d.ts or src/types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string;
    // Add other environment variables here as needed
  }
}
