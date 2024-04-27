import express, { Request, Response } from "express";
import authMiddleware from "@/middleware/authMiddleware";

import jwt from "jsonwebtoken";

// Models
import { initSearchIntent, getSearchHistory } from "@/models/searchSchema";
import { addSearchtoHistory, RegularUser } from "@/models/userSchema";

// Interfaces
import { User } from "@/interfaces/User";

const searchsRouter = express.Router();

searchsRouter.post("/", authMiddleware, async (req: Request, res: Response) => {
  let searchIntentCreated: boolean|null  = null;
  const { searchTerm, country, filter, topN, comparisonWebsites } = req.body;
  const token = req.header("auth-token");

  
  const userId = jwt.decode(token);
  console.log(userId);

  if (token && userId) {
  // if token is provided, save the search intent to the user's account
    const search: any = await initSearchIntent();

    searchIntentCreated = await addSearchtoHistory(userId._id, search._id);

    if (!searchIntentCreated) {
      return res.status(400).send({ error: "Search intent could not be created" });
    }
    res.send(search);

  } else {
    res.status(400).send({ error: "No token provided" });
  }


});


searchsRouter.get("/history", async (req: Request, res: Response) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(400).send({ error: "No token provided" });
  }

  const userId = jwt.decode(token)._id;

  if (!userId) {
    return res.status(400).send({ error: "Invalid token" });
  }

  const user: User | null = await RegularUser.findOne({ _id: userId });

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }
  const searchs = await getSearchHistory(user?.searchHistory);
  res.send(searchs);
});

export default searchsRouter;