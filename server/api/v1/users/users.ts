import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

// Schemas
import { AnonymousUser, RegularUser } from "@/models/userSchema";
import { Token, TokenRefresh, TokenBlacklist } from "@/models/tokenSchema";

// Interfaces
import { User } from "@/interfaces/User";

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
authRouter.post("/anon/gen", async (req: Request, res: Response) => {
  const newId = new mongoose.Types.ObjectId();

  const user = await AnonymousUser.create({
    _id: newId,
  })

  res.status(201).send(user);
});

/*
 * Register a new user
 *
 * POST /register
 * Request body:
 *  {
 *    "email": ""
 *    "password": ""
 *    "username": ""
 *  }
 * 
 * Response:
 */
authRouter.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log(hashedPassword);

  const newUser = await RegularUser.create({
    "email": email,
    "password": hashedPassword,
    "username": username,
  }).catch((err) => {
    if (err.code === 11000) {
      if (err.keyValue.email) {
        res.status(400).send({
          error: "Email already exists",
        });
      } else if (err.keyValue.username) {
        res.status(400).send({
          error: "Username already exists",
        });
      }
    }
  });

  res.status(201).send(newUser);
});

/*
 * Authenticate a user
 *
 * POST /auth
 * Request body:
 *  {
 *    "email": ""
 *    "password": ""
 *  }
 * 
 * Response:
 */
authRouter.post("/auth", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if ((!email && !username) || !password) {
    res.status(400).send({
      error: "Email and password are required",
    });
    return;
  }
  let user = {} as User | null;
  if (!email) {
    user = await RegularUser.findOne({ username: username });
  } else {
    user = await RegularUser.findOne({ email: email });
  }

  if (!user) {
    res.status(200).send({
      error: "User not found",
    });
    return;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    res.status(200).send({
      error: "Invalid password",
    });
    return;
  }

  // TODO: We probably need to check if the user already has a valid token or refresh token before issuing a new one.
  // We can do this by checking the Token and TokenRefresh collections for the user's ID

  if (user && result) {
    const accessToken = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "30m" });
    const refreshToken = crypto.randomBytes(64).toString("hex");
    const expires = new Date();
    expires.setHours(expires.getHours() + 2);
    
    await Token.create({
      token: accessToken,
      userId: user._id,
    });

    await TokenRefresh.create({
      token: refreshToken,
      userId: user._id,
    });
    
    res.header("auth-token", accessToken).send({accessToken, refreshToken});
  }
});

/*
 * Identify a user based on the token
 *
 * POST /identify
 * Request body:
 *  {
 *    "token": ""
 *  }
 * 
 * Response:
 *  {
 *    "_id": "",
 *    "username": "",
 *    "email": "",
 *    "createdAt": "",
 *    "updatedAt": ""
 *  }
 * 
 */
authRouter.post("/identify", async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    res.status(400).send({
      error: "Token is required",
    });
    return;
  }

  const tokenInformation = jwt.verify(token, process.env.TOKEN_SECRET);

  const user = await RegularUser.findOne({ _id: tokenInformation._id });

  res.send(user);
});

export default authRouter;