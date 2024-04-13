import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: 'localhost' as string,
    user: 'root' as string,
    password: "" as string,
    database: "test"as string
  },
} satisfies Config;