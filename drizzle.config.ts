import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/utils/schema.ts",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_vJRqfV75KyFU@ep-silent-hat-adxb7vh7-pooler.c-2.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require',
  },
});