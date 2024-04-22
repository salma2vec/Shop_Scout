import React, { useState } from "react";
import PropTypes from "prop-types";
import DefaultInput from "./Forms/DefaultInput";
import DefaultLabel from "./Forms/DefaultLabel";
import DefaultSelect from "./Forms/DefaultSelect";
import DefaultCheckbox from "./Forms/DefaultCheckbox";

const ComparisonForm = ({ searchTerm, onSearchTermChange, onCompare }) => {
  const FILTER_OPTIONS = ["none", "highestPrice", "lowestPrice", "highestRating"];
  const AVAILABLE_STORES = ["Amazon", "Flipkart", "Snapdeal", "Alibaba"];  // TODO: store in db, env ?
  
  const [formData, setFormData] = useState({
    search_term: "",
    filter: "",
    topN: 3,
    comparisonWebsites: ["Amazon", "Flipkart", "Snapdeal", "Alibaba"],
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedWebsites = checked
      ? [...formData.comparisonWebsites, name]
      : formData.comparisonWebsites.filter((site) => site !== name);
    setFormData({ ...formData, comparisonWebsites: updatedWebsites });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.search_term = searchTerm;
    formData.country = "IN";

    console.log(`Form Data: ${JSON.stringify(formData)}`)
    onCompare(formData);
  };

  return (
    <div id="products" className="flex items-center justify-center w-full ">
      <div className="flex flex-col items-center justify-start w-full px-10 py-10 md:px-20 bg-vividCerulean">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2 m-0">
          <DefaultInput
            id="searchTerm"
            name="search_term"
            placeholder="Enter Search Term"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            required={true}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <DefaultLabel
                htmlFor="filter"
                className="text-white"
                text="Filter:"
              />
              <DefaultSelect
                id="filter"
                name="filter"
                onChange={handleChange}
                value={formData.filter}
                options={FILTER_OPTIONS}
              />
            </div>
            <div className="flex items-center gap-2">
              <DefaultLabel htmlFor="topN" text="Top N:" />
              <DefaultInput
                type={"number"}
                id="topN"
                name="topN"
                onChange={handleChange}
                value={formData.topN}
                className="p-2 m-0 text-white bg-transparent border border-white rounded-full outline-none focus:border-teleMagenta focus:ring-0"
              />
            </div>
          </div>
          <div>
            <DefaultLabel text="Comparison Websites:" />
            <div className="flex items-center justify-between">
              {AVAILABLE_STORES.map((website) => (
                <div key={website} className="flex items-center gap-2">
                  <DefaultCheckbox
                    name={website}
                    checked={formData.comparisonWebsites.includes(website)}
                    onChange={handleCheckboxChange}
                    className="m-0"
                  />
                  <span className="text-white">{website}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-gray-800 bg-white rounded-full"
            >
              Search Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ComparisonForm.propTypes = {
  onSearchTermChange: PropTypes.func,
  onCompare: PropTypes.func,
};
export default ComparisonForm;