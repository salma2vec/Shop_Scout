import express, { Request, Response } from "express";
import authMiddleware from "@/middleware/authMiddleware";

import jwt from "jsonwebtoken";

// Models
import { initSearchIntent } from "@/models/searchSchema";
import { addSearchtoHistory } from "@/models/userSchema";

const searchsRouter = express.Router();

searchsRouter.post("/", authMiddleware, async (req: Request, res: Response) => {
  let searchIntentCreated: boolean|null  = null;
  const { searchTerm, country, filter, topN, comparisonWebsites } = req.body;
  const token = req.header("auth-token");

  const search: any = await initSearchIntent();
  
  const userId = jwt.decode(token);
  console.log(userId);

  if (token) {
  // if token is provided, save the search intent to the user's account
    searchIntentCreated = await addSearchtoHistory(userId, search._id);
  }


  res.send(search);
});

export default searchsRouter;