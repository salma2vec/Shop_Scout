import React, { useState } from "react";
import PropTypes from "prop-types";
import ResultsTable from "./ResultsTable";

import LoadingIcon from "../assets/icons/LoadingIcon";
import notFoundIcon from "../assets/icons/svg/not-found.svg";
import ProductCard from "./ProductCard";

const ProductResults = ({ products, showResults, isSearching }) => {
  return (
    <div className="bg-red-100">
      {/* TOOLBAR */}
      <div>
        <button>Grid</button>
        <button>Column</button>
      </div>
      {/* END TOOLBAR */}
      {
        isSearching ? <LoadingIcon /> : <ResultsTable results={products} />
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
    fontSize: "14px",
  },
  helperContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
  },
  centeredContainer: {
    textAlign: "center",
  },
};

ProductResults.propTypes = {
  products: PropTypes.array,
  showResults: PropTypes.bool,
  isSearching: PropTypes.bool,
};

export default ProductResults;

 //     {!!showResults ? (
  //       <h2 style={styles.heading}>Product Comparison Results</h2>
  //     ) : (
  //       <></>
  //     )}
  //     {!!isSearching ? (
  //       <div style={styles.helperContainer}>
  //         <p style={styles.paragraph}>
  //           Be patient while we look for the products that fit your criteria!
  //         </p>
  //         <img src={loadingIcon} alt="Loading" width={64} />
  //       </div>
  //     ) : !!showResults ? (
  //       products.length > 0 ? (
  //         <div>
  //           <ul style={styles.list}>
  //             {products.map((product, index) => (
  //               <li key={index} style={styles.listItem}>
  //                 <ProductCard product={product} />
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ) : (
  //         <div style={styles.helperContainer}>
  //           <img src={notFoundIcon} alt="" width={96} />
  //           <p style={styles.paragraph}>
  //             No matches were found according to your search criteria.
  //           </p>
  //           <p style={styles.paragraph}>
  //             Try different keywords or look for trending categories.
  //           </p>
  //         </div>
  //       )
  //     ) : (
  //       <div style={styles.centeredContainer}>
  //         <p style={{ fontWeight: "bold" }}>
  //           Begin your product search by entering relevant keywords into the
  //           search bar and clicking the "Search Now" button.
  //         </p>
  //       </div>
  //     )}