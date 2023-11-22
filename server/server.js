import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from '../models/searchResult.js';
import { findProductsOnAmazon, findProductsOnFlipkart, findProductsOnAlibaba, findProductsOnSnapdeal } from '../utils/index.js';

dotenv.config();

const app = express();
const port = 3000;

console.log(process.env.MONGODB_URI);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {});

// Define your routes here

app.get('/', (req, res) => {
  res.send('Hello, World! MongoDB connected successfully!');
});

// Implementing lean() option for Mongoose queries
app.get('/products', async (req, res) => {
  const search_term = req.query.search_term;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (!search_term) {
    res.status(400).send('Please provide a search term');
    return;
  }

  try {
    // Search for existing products in the database based on the search term with pagination
    const existingProducts = await Product.find({ search_term })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    if (existingProducts.length > 0) {
      // If there are existing products, return them
      res.send({ products: existingProducts });
      return;
    } else {
      // If no existing products, perform scraping and store in the database
      const products = await Promise.all([
        findProductsOnAmazon(search_term),
        findProductsOnFlipkart(search_term),
        findProductsOnSnapdeal(search_term),
        findProductsOnAlibaba(search_term),
      ]);

      // Insert the scraped products into the database with website information
      const websites = ["amazon", "flipkart", "snapdeal", "alibaba"];

      const db_promises = [];

      for (let i = 0; i < products.length; i++) {
        const productsWithWebsite = products[i].map(product => ({
          ...product,
          website: websites[i],
          search_term,
          reviews: product.reviews || 0, // Add this line to set reviews to 0 if it's undefined or null
        }));

        db_promises.push(Product.insertMany(productsWithWebsite));
      }

      const insertedProducts = await Promise.all(db_promises);

      // Combine the results from different websites into a single array
      const allProducts = insertedProducts.flat();

      res.send({ products: allProducts });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
