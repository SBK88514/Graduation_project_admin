import React, { useContext } from "react";
import { FaSearchengin } from "react-icons/fa";
import { ActionContext } from "../../../contexts/ActionContext";

function SearchInput({ setSearchInput, suggestions }) {
  const { handleEditManager } = useContext(ActionContext);
  return (
    <div className="relative w-60 max-w-md ">
      <label className="input input-bordered flex items-center gap-2 bg-amber-200">
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
              onClick={() => {
                handleEditManager({ ...suggestion, bySearch: true });
              }}
              key={index}
              className={`px-4 py-2 cursor-pointer text-white bg-[#1d232a] hover:bg-gray-500`}
            >
              {suggestion.manager_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
