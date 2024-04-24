import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ResultsTable from "./ResultsTable";

import { capitalize } from "../utils/textHelpers";
import DefaultButton from "./buttons/DefaultButton";
import LoadingIcon from "../assets/icons/LoadingIcon";
import NotFoundIcon from "../assets/icons/NotFoundIcon";
import ProductCard from "./ProductCard";

/*
 * View for the product results
 *
 * @param products - Array of products
 * @param showResults - Boolean to show results
 * @param isSearching - Boolean to show loading icon
 * 
 * @returns {JSX.Element}
 */
const ProductResults = ({ products, showResults, isSearching }) => {
  
  const AVAILABLE_VIEWS = useMemo(() => [
    {
      key: "table",
      component: ResultsTable,
    },
    {
      key: "grid",
      component: ProductCard,
    }
  ], []);
  
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "image",
        Cell: ({ cell: { value } }) => {
          return (
            <img className="object-contain w-16 h-16" src={value} alt="Product" width={64} />
          );
        },
      },
      {
        Header: "Name",
        accessor: "title",
        Cell: ({ cell: { value }, row: { original } }) => {
          const url = original.link;
          return (
            <a
              href={url}
              className="text-sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              {value}
            </a>
          );
        },
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
      {
        Header: "Reviews",
        accessor: "reviews",
      },
      {
        Header: "Website",
        accessor: "website",
      },
    ],
    []
  );

  const [ currentView, setCurrentView ] = useState("table"); // ["table", "grid"]
  const [ content, setContent ] = useState(null);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  
  const ViewComponent = AVAILABLE_VIEWS.find(view => view.key === currentView).component;

  useEffect(() => {
    /*
    * Update the content based on the current view
    */
    let newContent;
    
    if(isSearching && !showResults) {
      newContent = (
        <div className="flex flex-col items-center justify-center py-4 w-100">
          <span className="font-bold">
            We are searching for the best deals for you...
          </span>
          <div className="w-32">
            <LoadingIcon />
          </div>
        </div>
      );
    } else if(showResults && !isSearching && products.length > 0) {
      newContent = (
        <div className="flex flex-col gap-2 p-4">
          <div className="flex gap-2">
            {
              AVAILABLE_VIEWS.map((view, index) => (
                <DefaultButton key={index} text={capitalize(view.key)} backgroundColor={currentView === view.key ? "bg-teleMagenta" : "bg-vividCerulean"} onClick={() => handleViewChange(view.key)} />
              ))
            }
          </div>
          <div><ViewComponent columns={columns} data={products} /></div>
        </div>
      );
    } else if (showResults && !isSearching && products.length === 0) {
      newContent = (
        <div className="flex flex-col items-center justify-center py-4">
          <span className="font-bold">
            No results found
          </span>
          <div className="w-32">
            <NotFoundIcon />
          </div>
        </div>
      );
    } else {
      <div className="flex flex-col items-center justify-center py-4">
        <span>Results will be displayed here</span>
      </div>
    }
    setContent(newContent);
    

  }, [isSearching, showResults, currentView, AVAILABLE_VIEWS, products, columns, ViewComponent])
  return (
   <div>{content}</div>
  );
};

ProductResults.propTypes = {
  products: PropTypes.array,
  showResults: PropTypes.bool,
  isSearching: PropTypes.bool,
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired,
  }).isRequired,
  row: PropTypes.shape({
    original: PropTypes.shape({
      link: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductResults;