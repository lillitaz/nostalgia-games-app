import "./SearchBar.css";
import React from "react";

const SearchBar = ({ handleSearchInput }) => (
  <div>
    <input type="text" placeholder="Search..." onChange={handleSearchInput} />
  </div>
);

export default SearchBar;
