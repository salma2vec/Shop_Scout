import React from "react";
import PropTypes from "prop-types";

const ResultsTable = ({ results }) => {
  return (
    <div>
      <h1>Results Table</h1>
    </div>
  );
}

ResultsTable.propTypes = {
  results: PropTypes.array,
};

export default ResultsTable;