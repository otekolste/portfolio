import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="w-full absolute top-0 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-lightest text-3xl mr-3 hidden md:block">
          &lt; otekolste /&gt;
        </span>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="nav-bar font-medium flex flex-col p-4 md:p-0 mt-4 bg-darkest md:bg-transparent border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="nav-item block py-2 px-3 rounded hover:bg-dark md:hover:bg-transparent md:border-0 md:p-0">
              <NavLink
                to="/AboutMe"
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={({ isActive }) =>
                  `${
                    isActive ? "text-mid font-bold" : "text-lightest"
                  } hover:text-light`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item block py-2 px-3 rounded hover:bg-dark md:hover:bg-transparent md:border-0 md:p-0">
              <NavLink
                to="/Contact"
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={({ isActive }) =>
                  `${
                    isActive ? "text-mid font-bold" : "text-lightest"
                  } hover:text-light`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item block py-2 px-3 rounded hover:bg-dark md:hover:bg-transparent md:border-0 md:p-0">
              <NavLink
                to="/Portfolio"
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={({ isActive }) =>
                  `${
                    isActive ? "text-mid font-bold" : "text-lightest"
                  } hover:text-light`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item block py-2 px-3 rounded hover:bg-dark md:hover:bg-transparent md:border-0 md:p-0">
              <NavLink
                to="/Resume"
                // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={({ isActive }) =>
                  `${
                    isActive ? "text-mid font-bold" : "text-lightest"
                  } hover:text-light`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
