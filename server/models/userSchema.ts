import { User } from "@/interfaces/User";
import mongoose from "mongoose";

const { Schema } = mongoose;

/*
const abstractUserSchema = new Schema({
  _id: { type: Schema.Types.UUID, unique: true },
  sessionId: { type: String, unique: true },
  role: { type: String, enum: ["admin", "user", "anonymous"], default: "user" },
}, { discriminatorKey: "role" }); */

const anonymousUserSchema = new Schema();
anonymousUserSchema.add({
});

const regularUserSchema = new Schema();
regularUserSchema.add({
  email: { type: String, unique: true },
  password: String,
  username: { type: String, unique: true },
  firstName: String,
  lastName: String,
  preferedTheme: { type: String, default: "light" },
  searchHistory: [String],
  preferences: [{}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const addSearchtoHistory = async (userId: string, searchId: string) => {
  try {
    const user: any = await RegularUser.findOne({ _id: userId });
    user.searchHistory.push(searchId);
    await user.save();
    return true;
  } catch (error) {
    return false;
  }
  
};

const AnonymousUser = mongoose.model("AnonymousUser", anonymousUserSchema);
const RegularUser = mongoose.model("RegularUser", regularUserSchema);

export { AnonymousUser, RegularUser };