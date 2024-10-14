import { NavLink } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar() {
  return (
<nav className="bg-darkest w-full fixed top-0 z-40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="text-white text-3xl mr-3">&lt; otekolste /&gt;</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="nav-bar font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
      <li className="nav-item block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
        <NavLink
          to="/AboutMe"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-mid font-bold' : 'text-white'}`
          }         >
          About
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
        <NavLink
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-mid font-bold' : 'text-white'}`
          }        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
        <NavLink
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-mid font-bold' : 'text-white'}`
          }         >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
        <NavLink
          to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({ isActive }) => 
            `${isActive ? 'text-mid font-bold' : 'text-white'}`
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
