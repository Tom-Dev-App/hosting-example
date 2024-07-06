import "dotenv/config";

// APP
export const BASE_URL = process.env.BASE_URL ?? "localhost";
export const BASE_PORT = process.env.BASE_PORT ?? 8000;

// DATABASE
export const DB_HOST = process.env.DATABASE_HOST ?? "localhost";

export const DB_PORT = process.env.DATABASE_PORT ?? 3306;

export const DB_USER = process.env.DATABASE_USER ?? "root";

export const DB_PASSWORD = process.env.DATABASE_PASSWORD ?? "";

export const DB_NAME = process.env.DATABASE_NAME ?? "hosting_example";

// AUTHENTICATION
export const SECRET =
  process.env.JWT_SECRET ??
  "Exhh9D9qh72yXySbB5MnXU3Nq4MLumbFmU7T4iBerdgJ6VTixi4e3t991LUtDqW3";
