import React, { useState } from "react";
import ComparisonForm from "./components/ComparisonForm";
import ProductResults from "./components/ProductResults";
import axios from "axios";

const App = () => {
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
			setHasSearch(!!data.products ? true : false)
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsSearching(false);
		}
	};

	return (
		<div>
			<ComparisonForm onCompare={handleSearch} />
			<ProductResults products={results} showResults={hasSearch} isSearching={isSearching} />
		</div>
	);
};

export default App;
