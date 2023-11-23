import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  link: String,
  reviews: Number,
  rating: String,
  search_term: { type: String, index: true }, // Adding an index on the search_term field
  website: String, // Adding the website field
});

const Product = mongoose.model('Product', productSchema);

export { Product };
