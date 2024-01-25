import dotenv from "dotenv";

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
export const TOKEN = process.env.API_TOKEN;
export const API_BASE = process.env.API_PATH;
