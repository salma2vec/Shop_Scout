import mongoose from "mongoose";

export const connectToDatabase = async (dbURI: string, dbName?: string, options?: mongoose.ConnectOptions) => {
  try {
    await mongoose.connect(`${dbURI}/${dbName}`, options);
    console.log("MongoDB connected.");
  } catch (err) {
    console.log(err);
  }
};
