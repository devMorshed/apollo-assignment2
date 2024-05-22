import mongoose, { Connection } from "mongoose";
import config from "../config";

const connectDB = async (): Promise<Connection> => {
  try {
    const connectionInstance = await mongoose.connect(
      `${config.dbUrl}/${config.dbName}`
    );
    return connectionInstance.connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
