import React from "react";

const SearchResults = ({ searchResults }) => (
  <div className="divide-y divide-gray-300">
    {searchResults.map((result, index) => (
      <div key={index} className="py-7 flex">
        <h3 className="ml-3">{result.title}</h3>
        <p className="text-sm text-gray-500">{result.description}</p>
        <a className="text-sm font-medium text-gray-900" href={result.identifier}>View item</a>
      </div>
    ))}
      </div>
);

export default SearchResults;
