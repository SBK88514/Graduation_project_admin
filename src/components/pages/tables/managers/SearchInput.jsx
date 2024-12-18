import React  from "react";
import { FaSearchengin } from "react-icons/fa";


function SearchInput({ setSearchInput, suggestions, suggestionKey , onClick }) {
  
  return (
    <div className="relative w-full max-w-md">
      <label className="input input-bordered flex items-center gap-2">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="grow"
          placeholder="Search"
          id="searchInput"
          name="searchInput"
        />
        <FaSearchengin size={30} color="white" />
      </label>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
           onClick={() => onClick(suggestion)}
              
              key={index} 
              className={`px-4 py-2 cursor-pointer text-white bg-[#1d232a] hover:bg-gray-500`}
            >
              {suggestion[suggestionKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
