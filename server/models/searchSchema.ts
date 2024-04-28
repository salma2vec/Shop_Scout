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
};

export async function getSearchHistory(searchsIds: [string]) {
  console.log('Search history retrieved');
  // const searchs = Search.find({ userId });
  const searchs: Array<typeof Search> = [];
  let search;

  for (const searchId of searchsIds) {
    search = await Search.findOne({ _id: searchId }).exec();
    searchs.push(search);
  }

  return searchs;
};

const Search = mongoose.model('Search', searchSchema);

export { Search };
