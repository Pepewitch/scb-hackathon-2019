import { config } from "dotenv";

config();

export const {
  SCB_KEY,
  SCB_SECRET,
  SCB_BASE_URL,
  SCB_APP_ID,
  TEST_ACCESS_TOKEN,
  TEST_REFRESH_TOKEN,
  TEST_RESOURCE_OWNER_ID,
  PORT,
  ACCOUNT_ID
} = process.env;

export const UID = "1";
