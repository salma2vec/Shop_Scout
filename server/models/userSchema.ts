import mongoose from "mongoose";

const { Schema } = mongoose;

const abstractUserSchema = new Schema({
  _id: { type: Schema.Types.UUID, unique: true },
  email: { type: String, unique: true },
  sessionId: { type: String, unique: true },
  role: { type: String, enum: ["admin", "user", "anonymous"], default: "user" },
}, { discriminatorKey: "role" });

const anonymousUserSchema = new Schema();
anonymousUserSchema.add(abstractUserSchema);
anonymousUserSchema.add({
  token: { type: String, unique: true },
});

const regularUserSchema = new Schema();
regularUserSchema.add(abstractUserSchema);
regularUserSchema.add({
  email: { type: String, unique: true },
  password: String,
  username: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", abstractUserSchema);
const AnonymousUser = mongoose.model("AnonymousUser", anonymousUserSchema);
const RegularUser = mongoose.model("RegularUser", regularUserSchema);

export { AnonymousUser, RegularUser };