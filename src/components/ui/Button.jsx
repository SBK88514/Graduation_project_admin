import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
  console.log(props);

  return (
    <NavLink to={props.link} className="flex justify-between items-center mb-6">
      <button
        onClick={props.onClick}
        className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        {props.name}
      </button>

      {/* תיבת החיפוש שלך יכולה להיות כאן */}
    </NavLink>
  );
}

export default Button;