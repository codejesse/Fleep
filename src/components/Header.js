import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">FLEEP</span>
        </Link>
        <div className="flex md:order-2">
              <a href="#" className="block py-2 pr-3 text-[#252525]">Login</a>
          <button type="button" className="text-white bg-[#252525] hover:bg-[#252525] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border-none text-sm px-5 py-2 text-center mr-3 md:mr-0">Sign Up</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" strokeLineJoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 ml-10 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {/* <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-[#252525]" aria-current="page">Home</a>
            </li> */}
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#252525] font-normal">Homes</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#252525] font-normal">Locations</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#252525] font-normal">How it works</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;
