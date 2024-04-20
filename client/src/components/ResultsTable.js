import React from "react";
import { useTable, useSortBy } from "react-table";
import PropTypes from "prop-types";

const ResultsTable = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    getSortByToggleProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  }, useSortBy);

  
  return (
    <table
      className="w-full table-auto"
      {...getTableProps()}
    >
      <thead className="font-bold text-white uppercase bg-vividCerulean">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getSortByToggleProps()}>
              {column.render("Header")}
              {/* Add a sort direction indicator */}
              <span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? " 🔽"
                    : " 🔼"
                  : ""}
              </span>
            </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="border-b border-teleMagenta odd:white even:bg-gray-200 hover:bg-gray-300" {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className="text-sm" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

ResultsTable.propTypes = {
  results: PropTypes.array,
};

export default ResultsTable;