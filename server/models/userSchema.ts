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
});

const AnonymousUser = mongoose.model("AnonymousUser", anonymousUserSchema);
const RegularUser = mongoose.model("RegularUser", regularUserSchema);

export { AnonymousUser, RegularUser };