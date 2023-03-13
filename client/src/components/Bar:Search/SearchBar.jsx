import React from "react";

const SearchBar = ({ handleSearchInput }) => (

  <div class="flex flex-col p-14 py-2 m-h-screen">

    <div class="bg-black items-center justify-between w-half flex rounded-full shadow-lg p-1 mb-4 sticky">

      <input onChange={handleSearchInput} class="font-bold rounded-full w-full py-5 pl-8 text-white-600 bg-blue-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search"></input>

    </div>
  </div>
);

export default SearchBar;
