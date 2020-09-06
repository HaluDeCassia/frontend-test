import React from "react";

import Date from "../../assets/svg/Icon/Date.svg";
import Image from "../../assets/svg/Icon/Image.svg";
import Logo from "../../assets/svg/Icon/Logo.svg";
import Menu from "../../assets/svg/Icon/Menu.svg";
import Person from "../../assets/svg/Icon/Person.svg";
import Place from "../../assets/svg/Icon/Place.svg";
import Search from "../../assets/svg/Icon/Search.svg";

const Nav = () => {
  return (
    <div className="md:max-w-5xl m-4 rounded overflow-hidden shadow-lg">
      <form className="w-full p-4 bg-white">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col xs:w-1/3 md:w-1/6 px-3">
            <label className="inline-flex items-center text-lg mt-3">
              <input name="type" value="1" type="radio" className="form-radio h-5 w-5 text-indigo-600" /><span className="ml-2">Ida e volta</span>
            </label>
          </div>
          <div className="flex flex-col xs:w-1/3 md:w-1/6 px-3">
            <label className="inline-flex items-center text-lg mt-3">
              <input name="type" value="2" type="radio" className="form-radio h-5 w-5 text-indigo-600" /><span className="ml-2">Só ida</span>
            </label>
          </div>
          <div className="flex flex-col xs:w-1/3 md:w-1/6 px-3">
            <label className="inline-flex items-center text-lg mt-3">
              <input name="type" value="3" type="radio" className="form-radio h-5 w-5 text-indigo-600" /><span className="ml-2">Só volta</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col w-full md:w-1/4 px-3">
            <label htmlFor="origin" className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Origem
            </label>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image size={24} className="inline-block" />
              </span>
              <input id="origin" type="text" name="origin" className="py-3 w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Ex.: São Paulo" />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label htmlFor="destiny" className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Destino
            </label>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Place size={24} className="inline-block" />
              </span>
              <input id="destiny" type="text" name="destiny" className="py-3 w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Ex.: Rio de Janeiro" />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label htmlFor="date" className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Data de Ida / Retorno
            </label>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Date size={24} className="inline-block" />
              </span>
              <input id="date" type="text" name="date" className="py-3 w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Ex.: Sábado 14/4 - Quinta 18/4" />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Número de pessoas
            </label>
            <div htmlFor="people" className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Person size={24} className="inline-block" />
              </span>
              <input id="people" type="text" name="people" className="py-3 w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Ex.: 1 pessoa" />
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-end p-4 bg-gray-300 items-center">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          <Search width={16} className="inline-block" /> Busque as viagens
        </button>
      </div>
    </div>
  );
};

export default Nav;
