import React, { useState } from 'react';
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async ({ search_term, filter, topN, comparisonWebsites }) => {
    try {
      const response = await fetch(`/api/products?search_term=${search_term}`);
      const data = await response.json();
      setResults(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <ComparisonForm onSubmit={handleSearch} />
      <ProductResults products={results} />
    </div>
  );
};

export default App;

