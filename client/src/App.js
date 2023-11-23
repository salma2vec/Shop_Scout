import React, { useState } from 'react';
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async ({ search_term, filter, topN, comparisonWebsites }) => {
    try {
      const response = await axios.get(`https://5000-idealisticint-shopscout-vxtkc2rlk4c.ws-us106.gitpod.io/products?search_term=${search_term}`);
      const data = response.data;
      console.log(data);
      setResults(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <ComparisonForm onCompare={handleSearch} />
      <ProductResults products={results} />
    </div>
  );
};

export default App;