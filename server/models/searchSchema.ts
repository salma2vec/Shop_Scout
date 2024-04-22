import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  currency: String,
  image: String,
  link: String,
  reviews: Number,
  rating: String,
  search_term: { type: String, index: true }, // Adding an index on the search_term field
  website: String, // Adding the website field
});

export async function findProducts(search_term: string, filterObject: object, page: number, limit: number) {
  const products = await Product.find({ search_term, ...filterObject })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return products;
}

const Product = mongoose.model('Product', productSchema);

export { Product };
