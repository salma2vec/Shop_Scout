import mongoose from "mongoose";

export const connectToDatabase = async (dbURI: string, options?: mongoose.ConnectOptions) => {
  try {
    await mongoose.connect(dbURI, options);
    console.log("MongoDB connected.");
  } catch (err) {
    console.log(err);
  }
};
