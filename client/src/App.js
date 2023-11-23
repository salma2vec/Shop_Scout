import React, { useState } from "react";
import ComparisonForm from "./components/ComparisonForm";
import ProductResults from "./components/ProductResults";
import axios from "axios";

const App = () => {
	const [results, setResults] = useState([]);

	const handleSearch = async ({
		search_term,
		filter,
		topN,
		comparisonWebsites,
	}) => {
		try {
			const response = await axios({
				method: "POST",
				url: `${process.env.REACT_APP_HOST_URL}/products`,
				data: { search_term, filter, topN, comparisonWebsites },
			});
			const data = response.data;
			console.log(data);
			setResults(data.products);
		} catch (error) {
			console.error("Error fetching data:", error);
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
