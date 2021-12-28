import React, { useState } from "react";
import Logo from "./images/logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setToggle] = useState("hidden px-2 pt-2 pb-3 space-y-1");
  const Tog = () => {
    if (toggle == "hidden px-2 pt-2 pb-3 space-y-1") {
      setToggle("px-2 pt-2 pb-3 space-y-1");
    } else {
      setToggle("hidden px-2 pt-2 pb-3 space-y-1");
    }
  };
  return (
    <div className=" sticky top-0 z-50">
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  onClick={Tog}
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/notes"
                    className="notes hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Notes
                  </Link>

                  <Link
                    to="/addnotes"
                    className="addnotes hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Add Notes
                  </Link>

                  <Link
                    to="/"
                    className="logout hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      localStorage.clear();
                      if (localStorage.getItem("token") === null) {
                        const notes = document.querySelector(".notes");
                        const addnotes = document.querySelector(".addnotes");
                        const logout = document.querySelector(".logout");
                        notes.classList.add("hidden");
                        addnotes.classList.add("hidden");
                        logout.classList.add("hidden");
                      }
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className={toggle}>
            <Link
              to="/notes"
              className="notes hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              My Notes
            </Link>

            <Link
              to="/addnotes"
              className="addnotes hidden ntext-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Add Notes
            </Link>

            <Link
              to="/"
              className="logout hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
