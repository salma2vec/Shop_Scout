import React, { useState } from "react";
import ComparisonForm from "./components/ComparisonForm";
import ProductResults from "./components/ProductResults";
import axios from "axios";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async ({
    search_term,
    filter,
    topN,
    comparisonWebsites,
  }) => {
    setIsSearching(true);
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_HOST_URL}/products`,
        data: { search_term, filter, topN, comparisonWebsites },
      });
      const data = response.data;
      console.log(data);
      setResults(data.products);
      setHasSearch(!!data.products ? true : false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-darkBlack text-white ">
      <Navbar />
      <Hero searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onCompare={handleSearch} />
      <div className="grid grid-cols-2 ">
        <ComparisonForm searchTerm={searchTerm} onCompare={handleSearch} />
        <ProductResults
          products={results}
          showResults={hasSearch}
          isSearching={isSearching}
        />
      </div>
    </div>
  );
};

export default App;
