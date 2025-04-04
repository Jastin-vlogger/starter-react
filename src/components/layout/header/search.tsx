import React, { useState } from "react";
const Search = () => {
  let i = 0;
  const [searchInput, setSearchInput] = useState("");
    console.log(i++)
  const updateSearchInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    i++
    setSearchInput(e.target.value);
    console.log(i);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchInput}
        onChange={(e) => updateSearchInput(e)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9999 20.9999L16.6499 16.6499"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Search;
