import React, { useState } from 'react';

const ComparisonForm = ({ onCompare }) => {
  const [formData, setFormData] = useState({
    search_term: '',
    filter: 'none',
    topN: 3,
    comparisonWebsites: ['Amazon', 'Flipkart', 'Snapdeal', 'Alibaba'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedWebsites = checked
      ? [...formData.comparisonWebsites, value]
      : formData.comparisonWebsites.filter(site => site !== value);
    setFormData({ ...formData, comparisonWebsites: updatedWebsites });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompare(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search Term:</label>
      <input type="text" id="searchTerm" name="search_term" required maxLength="20" onChange={handleChange} value={formData.search_term} />

      <label htmlFor="filter">Filter:</label>
      <select id="filter" name="filter" onChange={handleChange} value={formData.filter}>
        <option value="none">None</option>
        <option value="highestPrice">Highest Price</option>
        <option value="lowestPrice">Lowest Price</option>
        <option value="highestRating">Highest Rating</option>
      </select>

      <label htmlFor="topN">Top N:</label>
      <input type="number" id="topN" name="topN" min="1" onChange={handleChange} value={formData.topN} />

      <label>Comparison Websites:</label>
      <div>
        <label>
          <input type="checkbox" name="Amazon" checked={formData.comparisonWebsites.includes('Amazon')} onChange={handleCheckboxChange} />
          Amazon
        </label>
        <label>
          <input type="checkbox" name="Flipkart" checked={formData.comparisonWebsites.includes('Flipkart')} onChange={handleCheckboxChange} />
          Flipkart
        </label>
        <label>
          <input type="checkbox" name="Snapdeal" checked={formData.comparisonWebsites.includes('Snapdeal')} onChange={handleCheckboxChange} />
          Snapdeal
        </label>
        <label>
          <input type="checkbox" name="Alibaba" checked={formData.comparisonWebsites.includes('Alibaba')} onChange={handleCheckboxChange} />
          Alibaba
        </label>
      </div>

      <button type="submit">Compare</button>
    </form>
  );
};

export default ComparisonForm;
