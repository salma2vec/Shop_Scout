import React, { useState } from 'react';
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async ({ searchTerm, filter, topN, websites }) => {
    // Implement the logic to fetch data from the backend API using searchTerm, filter, topN, and websites
    // Set the results using setResults
    // Example: const response = await fetch(`/api/products?search_term=${searchTerm}&filter=${filter}&topN=${topN}&websites=${websites.join(',')}`);
    // const data = await response.json();
    // setResults(data.products);
  };

  return (
    <div>
      <ComparisonForm onSubmit={handleSearch} />
      <ProductResults products={results} />
    </div>
  );
};

export default App;
