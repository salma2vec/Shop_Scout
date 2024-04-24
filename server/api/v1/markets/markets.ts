import express, { Request, Response } from "express";

// Schemas
import { Marketplace } from "@/models/marketplaceSchema";

const marketsRouter = express.Router();

/*
 * Get all marketplaces
 *
 * GET /markets/all
 * 
 * Response:
 *  [
 *    {
 *      "_id": "60f3b3b3b3b3b3b3b3b3b3b3",
 *      "name": "amazon",
 *      "description": "The largest online retailer in the world",
 *      "category": "all",
 *      "__v": 0
 *    },
 *  ]
 */
marketsRouter.get("/all", async (req: Request, res: Response) => {
  const markets = await Marketplace.find();

  res.send(markets);
});

/*
 * Get a specific marketplace
 *
 * GET /markets/:name
 * 
 * Response:
 *  {
 *    "_id": "60f3b3b3b3b3b3b3b3b3b3",
 *    "name": "amazon",
 *    "description": "The largest online retailer in the world",
 *    "category": "all",
 *    "__v": 0
 *  },
 */
marketsRouter.get("/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  const market = await Marketplace.find({ name: name }).exec();

  res.send(market);
});

export default marketsRouter;