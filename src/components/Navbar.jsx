import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative border-gray-200 dark:bg-gray-900 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 lg:px-2 py-5 lg:py-10">
        <h1 className="self-center text-3xl font-normal whitespace-nowrap text-white uppercase">Readio</h1>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:pb-1 md:border-orange-500 text-orange-500 md:font-light md:bg-transparent md:p-0 md:text-white uppercase md:border-b-[1px] text-sm"
                    : "block py-2 px-3 md:font-light md:bg-transparent md:p-0 md:text-white uppercase text-sm"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:pb-1 md:border-orange-500 text-orange-500 md:font-light md:bg-transparent md:p-0 md:text-white uppercase md:border-b-[1px] text-sm"
                    : "block py-2 px-3 md:font-light md:bg-transparent md:p-0 md:text-white uppercase text-sm"
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlists"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:pb-1 md:border-orange-500 text-orange-500 md:font-light md:bg-transparent md:p-0 md:text-white uppercase md:border-b-[1px] text-sm"
                    : "block py-2 px-3 md:font-light md:bg-transparent md:p-0 md:text-white uppercase text-sm"
                }
              >
                Wishlists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/" // Navigate to home
                className="block py-2 px-3 md:font-light md:bg-transparent md:p-0 md:text-white uppercase text-sm"
              >
                Login
              </NavLink>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
