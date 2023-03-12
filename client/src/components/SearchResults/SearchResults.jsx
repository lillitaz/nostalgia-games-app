import "./SearchResults.css";
import React from "react";

const SearchResults = ({ searchResults }) => (
  <div className="search-results">
    {searchResults.map((result, index) => (
      <div key={index} className="search-result">
        <h3>{result.title}</h3>
        <p>{result.description}</p>
        <a href={result.identifier}>View item</a>
      </div>
    ))}
      </div>
);

export default SearchResults;
