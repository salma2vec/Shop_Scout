import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

// Models
import { initSearchIntent } from "@/models/searchSchema";
import { addSearchtoHistory } from "@/models/userSchema";

const searchsRouter = express.Router();

searchsRouter.post("/", async (req: Request, res: Response) => {
  let searchIntentCreated: boolean|null  = null;
  const { searchTerm, country, filter, topN, comparisonWebsites, token } = req.body;
  const search: any = await initSearchIntent();
  
  const userId = jwt.decode(token);
  console.log(userId);
  // if token is provided, save the search intent to the user's account
  if (token) {
    searchIntentCreated = await addSearchtoHistory(token, search._id);
  }


  res.send(search);
});

export default searchsRouter;