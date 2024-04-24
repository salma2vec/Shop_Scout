import e from "express";
import mongoose from "mongoose";

const { Schema } = mongoose;

const marketplaceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  category: { type: String, enum: ["all", "electronics", "fashion", "home", "appliances", "books", "beauty", "toys", "other"], default: "all" },

});

const Marketplace = mongoose.model("Marketplace", marketplaceSchema);
export { Marketplace };