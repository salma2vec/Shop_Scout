import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  searchTerm: { type: String, index: true },
  products: [String],
  isSearching: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export async function initSearchIntent() {
  console.log('Search intent initialized');
  const search = Search.create({
  });

  return search;
}

const Search = mongoose.model('Search', searchSchema);

export { Search };
