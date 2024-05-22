import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  origin: process.env.ORIGIN,
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME || "",
};
