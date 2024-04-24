import mongoose from "mongoose";

const { Schema } = mongoose;

const tokenSchema = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now },
});

const refreshTokenSchema = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now, expires: 2592000 },
});

const tokenBlacklistSchema = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Token = mongoose.model("Token", tokenSchema);
const TokenRefresh = mongoose.model("TokenRefresh", refreshTokenSchema);
const TokenBlacklist = mongoose.model("TokenBlacklist", tokenBlacklistSchema);

export { Token, TokenRefresh, TokenBlacklist };