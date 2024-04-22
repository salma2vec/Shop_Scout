import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

// Components
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';
import axios from 'axios';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BannerEnv from './components/BannerEnv';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  console.log("preferedTheme", preferedTheme);
  const handleSearch = async ({ search_term, filter, topN, country, comparisonWebsites }) => {
    setIsSearching(true);
    setHasSearch(false);

    // scroll to the bottom of the page so the user
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

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

  const wrapperClasses = classNames('transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  return (
    <div className={wrapperClasses}>
      {
        process.env.NODE_ENV !== 'production' && <BannerEnv />
      }
      <Navbar />
      <Hero searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onCompare={handleSearch} />
        <ComparisonForm searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onCompare={handleSearch} />
        <ProductResults products={results} showResults={hasSearch} isSearching={isSearching} />
    </div>
  );
};

export default App;