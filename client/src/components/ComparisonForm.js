import React, { useState } from "react";

const ComparisonForm = ({ onCompare }) => {

  const [searchTerm, onSearchTermChange] = useState("");

  const [formData, setFormData] = useState({
    search_term: "",
    filter: "none",
    topN: 3,
    comparisonWebsites: ["Amazon", "Flipkart", "Snapdeal", "Alibaba"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedWebsites = checked
      ? [...formData.comparisonWebsites, value]
      : formData.comparisonWebsites.filter((site) => site !== value);
    setFormData({ ...formData, comparisonWebsites: updatedWebsites });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompare(formData);
  };

  return (
    <div id="products" className="flex items-center justify-center w-full ">
      <div className="flex items-center justify-start w-full flex-col gap-20 p-10 md:p-20">
        <div className="flex flex-col gap-4 items-start justify-center w-full">
          {/* <h1 className="font-bold text-4xl md:text-5xl leading-none max-w-2xl">
            Compare prices of products from different websites
          </h1>
          <p className="text-lg leading-tight md:text-xl">
            Search for a product and compare prices from your favorite websites
          </p> */}
          {/* <div className="flex items-start md:items-center justify-center md:flex-row flex-col gap-4 mt-4 ">
            <div className="flex items-center justify-center ">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find a perfect product"
                className=" py-3 px-6 !mb-0 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#products"
                className="py-3 px-6 rounded-full bg-lightGreen text-white font-bold"
              >
                Search
              </a>
            </div>
          </div> */}
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {/* <label htmlFor="searchTerm">Search Term:</label> */}
          <div className="flex items-center justify-center w-full gap-4">
            <input
              type="text"
              id="searchTerm"
              name="search_term"
              placeholder="Search Term"
              required
              maxLength="20"
              onChange={(e) => onSearchTermChange(e.target.value)}
              value={searchTerm}
              className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
            />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-6 py-2 mb-4 bg-lightGreen rounded-full"
              >
                Search
              </button>
            </div>
          </div>

          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            name="filter"
            onChange={handleChange}
            value={formData.filter}
            className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
          >
            <option value="none">None</option>
            <option value="highestPrice">Highest Price</option>
            <option value="lowestPrice">Lowest Price</option>
            <option value="highestRating">Highest Rating</option>
          </select>

          <label htmlFor="topN">Top N:</label>
          <input
            type="number"
            id="topN"
            name="topN"
            min="1"
            onChange={handleChange}
            value={formData.topN}
            className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
          />

          <label>Comparison Websites:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="Amazon"
                checked={formData.comparisonWebsites.includes("Amazon")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Amazon
            </label>
            <label>
              <input
                type="checkbox"
                name="Flipkart"
                checked={formData.comparisonWebsites.includes("Flipkart")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Flipkart
            </label>
            <label>
              <input
                type="checkbox"
                name="Snapdeal"
                checked={formData.comparisonWebsites.includes("Snapdeal")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Snapdeal
            </label>
            <label>
              <input
                type="checkbox"
                name="Alibaba"
                checked={formData.comparisonWebsites.includes("Alibaba")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Alibaba
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComparisonForm;
