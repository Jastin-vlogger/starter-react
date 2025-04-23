import React, { useEffect, useRef, useState } from "react";
import { BYPASSCORS } from "../../../utils/constants";

const getSearchData = async (searchInput: string) => {
  const response = await fetch(
    `${BYPASSCORS}https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.97530&lng=77.59100&str=${searchInput}&trackingId=undefined&includeIMItem=true`
  );
  const data = await response.json();
  return data;
};

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchInput(searchInput);
      getSearchData(searchInput).then((data) => {
        setSearchResults(data.data.suggestions);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (!searchInput.length) {
      setSearchResults([]);
    }
  }, [searchInput]);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full md:w-1/2 mx-auto" ref={searchRef}>
      <div className="relative">
        {/* Search Input */}
        <div className="search-container flex items-center border border-gray-300 rounded px-3 py-2">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="search-input w-full pr-10 outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={() => setShowDropdown(true)}
          />
          {searchInput.length > 0 && (
            <svg
              onClick={() => {
                setSearchInput("");
                setShowDropdown(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x-icon lucide-x cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
          <svg
            className="ml-2"
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

        {/* Search Suggestions (Dropdown) */}
        {showDropdown && (
          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded shadow-md mt-1 max-h-100 overflow-y-auto">
            {searchResults.map((searchDetails: any, idx: number) => (
              <div
                key={idx}
                className="search-result-container px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${searchDetails.cloudinaryId}`}
                  alt={searchDetails.text}
                  width={64}
                  height={64}
                />
                <div className=" text-md text-gray-600">
                  {searchDetails.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
