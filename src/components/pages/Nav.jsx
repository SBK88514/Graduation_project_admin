import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link to={"/"} className="text-2xl font-bold text-amber-700">
              Logo
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Add Issue
            </a>
            <a
              href="#"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Add Manager
            </a>
            <a
              href="#"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Add Employee
            </a>
            <a
              href="#"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              All Issues
            </a>
            <a
              href="#"
              className="text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Employee List
            </a>
          </div>

          {/* User Icon - Right Side */}
          <div className="flex items-center">
            <div className="relative">
              <button className="flex items-center space-x-3 text-amber-900 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors duration-200">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
