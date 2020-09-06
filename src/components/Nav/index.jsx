import React from "react";

import Logo from "../../assets/svg/Icon/Logo.svg";
import Menu from "../../assets/svg/Icon/Menu.svg";

const Nav = () => {
  return (
    <nav className="flex border-solid border-b border-white border-solid items-center justify-between flex-wrap py-6 mx-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Logo width={60} height={60} color='white' className="inline-block" />
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-2 py-2 text-white hover:text-indigo-200">
          <Menu width={32} height={32} fill='white' className="inline-block" />
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex-grow">
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-indigo-200 mr-4">
            Explore
          </a>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-indigo-200 mr-4">
            Sobre nós
          </a>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-indigo-200 mr-4">
            Seguros
          </a>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-indigo-200">
            Hotéis
          </a>
        </div>
        <div>
          <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-indigo-200">
            Viagens
          </a>
          <a href="#" className="inline-block text-sm p-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0 md:ml-4">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
