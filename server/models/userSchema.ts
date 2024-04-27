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
  searchHistory: [String],
  preferences: {
    language: { type: String, default: "en" },
    currency: { type: String, default: "usd" },
    country: { type: String },
    preferedTheme: { type: String, default: "light" },
  },
  security: {
    twoFactorAuth: { type: Boolean, default: false },
    hasValidEmail: { type: Boolean, default: false },
    emailValidationToken: { type: String, expires: 3600 },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const addSearchtoHistory = async (userId: string, searchId: string) => {
  try {
    const user: any = await RegularUser.findOne({ _id: userId });
    user.searchHistory = [ ...user.searchHistory, searchId];
    user.updatedAt = Date.now();
    await user.save();
    return true;
  } catch (error) {
    return false;
  }
};

const AnonymousUser = mongoose.model("AnonymousUser", anonymousUserSchema);
const RegularUser = mongoose.model("RegularUser", regularUserSchema);

export { AnonymousUser, RegularUser };