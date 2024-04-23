import express, { Request, Response } from "express";
import mongoose from "mongoose";

// Schemas
import { AnonymousUser } from "@/models/userSchema";

const authRouter = express.Router();

/*
 * Issue a uuid and token for an anonymous user, 
 * the goal is to keep track of the user's session and activities 
 * and if the user decides to sign up, we can associate 
 * the activities with the user's account.
 *
 * POST /temp-user
 * Request body:
 * {
 *   "email": "
 * }
 */
authRouter.post("/temp-user", async (req: Request, res: Response) => {
  const newId = new mongoose.Types.ObjectId();

  const user = await AnonymousUser.create({
    _id: newId,
  })

  console.log(user);
  res.send("Temporary user created");
});

authRouter.post("/auth", async (req: Request, res: Response) => {
  // Authentication logic here
  res.send("Authenticated");
});

export default authRouter;