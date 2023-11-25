import React from "react";
import notFoundIcon from "../assets/icons/svg/not-found.svg"
import loadingIcon from "../assets/icons/svg/loading.svg"
import ProductCard from "./ProductCard";
const ProductResults = ({ products, showResults, isSearching }) => {
	return (
		<div style={styles.container}>
			{ !!showResults ? <h2 style={styles.heading}>Product Comparison Results</h2> : <></> }
			{
				!!isSearching ?
				<div style={styles.helperContainer}>
					<p style={styles.paragraph}>Be patient while we look for the products that fit your criteria!</p>
					<img src={loadingIcon} alt="Loading" width={64}/>
				</div>
				:
				!!showResults ?
				products.length > 0 ? 
				<div>
					<ul style={styles.list}>
						{
							products.map((product, index) => (
								<li index={index}>
									<ProductCard product={product} />
								</li>
							))
						}
					</ul>
				</div>
				:
				<div style={styles.helperContainer}>
					<img src={notFoundIcon} alt="" width={96}/>
					<p style={styles.paragraph}>No matches were found according to your search criteria.</p>
					<p style={styles.paragraph}>Try different keywords or look for trending categories.</p>
				</div>
				:
				<div style={styles.helperContainer}>
					<p style={{fontWeight: "bold"}}>To start, type the keywords in the search bar and press "Compare"!</p>
				</div>
			}
		</div>
	);
};

const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		maxWidth: "600px",
		margin: "0 auto",
		padding: "20px",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		borderRadius: "8px",
	},
	heading: {
		color: "#333",
		fontSize: "24px",
		marginBottom: "15px",
	},
	list: {
		listStyle: "none",
		padding: "0",
	},
	listItem: {
		borderBottom: "1px solid #eee",
		padding: "10px 0",
	},
	paragraph: {
		fontSize: "14px"
	},
	helperContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "14px"
	},
};

export default ProductResults;
