import React from "react";

const SearchResults = ({ searchResults }) => (
  <div className="holder max-w-screen-lg grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2" style={{ margin: "3vw 3vw" }}>
    {searchResults.map((result, index) => (
      <div key={index} className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative" style={{ width: "90%" }}>
        <img className="w-full" src={`https://archive.org/services/img/${result.identifier}`} alt="Platzhalter Bild" />
        <div className="desc p-4 text-gray-800">
          <a target="/account" className="title font-bold block cursor-pointer hover:underline">{result.title}</a>
          <a href={`https://archive.org/details/${result.identifier}`} target="_new" className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">View on the Internet Archive</a>
          <span className="description text-sm block py-2 border-gray-400 mb-2">{result.description}</span>
        </div>
      </div>
    ))}
  </div>
);

export default SearchResults;
