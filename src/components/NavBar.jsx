import { NavLink } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar() {
  return (
<nav className="bg-white fixed top-0 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="text-3xl mr-3">&lt; otekolste /&gt;</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="nav-bar font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li className="nav-item block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 active:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <NavLink
          to="/"
          // Check to see if current class name is active; if so, we change the color to indicate what page the user is on
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500 font-bold' : 'text-gray-900'}`
          }         >
          Home
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 active:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <NavLink
          to="/AboutMe"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500 font-bold' : 'text-gray-900'}`
          }         >
          About
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 active:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <NavLink
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500 font-bold' : 'text-gray-900'}`
          }        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 active:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <NavLink
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500 font-bold' : 'text-gray-900'}`
          }         >
          Portfolio
        </NavLink>
      </li>
      <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 active:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <NavLink
          to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500 font-bold' : 'text-gray-900'}`
          }         >
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
