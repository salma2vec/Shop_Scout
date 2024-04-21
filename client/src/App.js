import React, { useState } from 'react';
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';
import axios from 'axios';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: '50%',
      cy: '23%',
    },
    svg: {
      transform: 'rotate(40deg)',
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: '100%',
      cy: '0%',
    },
    svg: {
      transform: 'rotate(90deg)',
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleSearch = async ({ search_term, filter, topN, country, comparisonWebsites }) => {
    setIsSearching(true);
    setHasSearch(false);
    try {
      const response = await axios({
        method: 'POST',
        url:  `${process.env.REACT_APP_API_URL}/products`,
        data: { search_term, filter, topN, country, comparisonWebsites },
      });
      const data = response.data;
      console.log(data);
      setResults(data.products);
      setHasSearch(!!data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Hero searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onCompare={handleSearch} />
        <ComparisonForm searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onCompare={handleSearch} />
        <ProductResults products={results} showResults={hasSearch} isSearching={isSearching} />
    </div>
  );
};

export default App;