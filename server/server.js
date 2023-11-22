// server.js

import express from 'express';
import mongoose from 'mongoose';
import { Product } from './models/searchResults.js';

const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://salmasaa02:<password>@cluster0.88x3d74.mongodb.net/shopscout?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
      res.send(existingProducts);
      return;
    } else {
      // If no existing products, perform scraping and store in the database
      const products = await Promise.all([
        findProductsOnAmazon(search_term),
        findProductsOnFlipkart(search_term),
        findProductsOnSnapdeal(search_term),
        findProductsOnAlibaba(search_term),
      ]);

      // Assume the result of scraping is stored in the variable 'products'
      // Insert the scraped products into the database with website information
      const websites = ["amazon", "flipkart", "snapdeal", "alibaba"];
      const dbPromises = [];

      for (let i = 0; i < products.length; i++) {
        const productsWithWebsite = products[i].map(product => ({
          ...product,
          website: websites[i],
          search_term,
        }));

        dbPromises.push(Product.insertMany(productsWithWebsite));
      }

      await Promise.all(dbPromises);

      // Combine the results from different websites into a single array
      const allProducts = [].concat(...products);

      res.send(allProducts);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
