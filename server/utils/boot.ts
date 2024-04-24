import { Marketplace } from "@/models/marketplaceSchema";

// TODO: move into a fixture
const MARKETS = [
  {
    name: "amazon",
    description: "The largest online retailer in the world",
    category: "all"
  },
  {
    name: "alibaba",
    description: "The largest online retailer in China",
    category: "all"
  },
  {
    name: "snapdeal",
    description: "The largest online retailer in India",
    category: "all"
  },
  {
    name: "flipkart",
    description: "The largest online retailer in India",
    category: "all"
  }
];

export const startupDb = async () => {
  Marketplace.insertMany(MARKETS)
    .then(() => {
      console.log("Marketplaces added to the database.");
    })
    .catch((err) => {
      if (err.code === 11000) {
        console.log("Marketplaces already exist in the database.");
      }
    });
};