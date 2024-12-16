import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NavAdmin() {
  const { signOut } = useContext(AuthContext);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left Side */}
          <NavLink to={"/"} className="text-2xl font-bold text-amber-700 w-44">
            <img
              src="https://res.cloudinary.com/dp08vd3cy/image/upload/v1733785970/logo_lhjqzl.jpg"
              alt="image logo"
            />
          </NavLink>

          {/* Navigation Links - Center */}
          <div className="flex space-x-8">
            <NavLink
              to={"addissue"}
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium
               transition-colors duration-200"
            >
              Add Issue
            </NavLink>
            <NavLink
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              to={"allissues"}
            >
              All Issues
            </NavLink>
            <NavLink
              to="addmanager"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Add Manager
            </NavLink>
            <NavLink
              to="addemployee"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Add Employee
            </NavLink>
            <NavLink
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              to={"allemployees"}
            >
              Employee List
            </NavLink>
            <NavLink
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              to={"allmanagers"}
            >
              Manager List
            </NavLink>
          </div>

          {/* User Icon with Dropdown - Right Side */}
          <div className="flex items-center">
            <div className="relative">
              <button
                className="flex items-center space-x-3 text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors duration-200"
                onClick={() => {
                  const dropdown = document.getElementById("userDropdown");
                  dropdown.classList.toggle("hidden");
                }}
              >
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm">User Name</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                id="userDropdown"
                className="hidden absolute transform -translate-x-1/2 left-1/2 mt-2 w-40 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5"
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-amber-900 hover:bg-amber-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Profile</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-amber-900 hover:bg-amber-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Edit</span>
                  </div>
                </a>
                <div className="border-t border-amber-100"></div>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span onClick={signOut}>Logout</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavAdmin;
