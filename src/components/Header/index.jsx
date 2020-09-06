import React from "react";

import Nav from "../Nav";

const Header = () => {
  return (
    <header className="lg:pr-64 lg:pl-64 bg-gradient-to-b from-gray-500 to-gray-600">
      <Nav />
      <h1 className="text-5xl font-bold text-white text-center mt-10">
        Viaje pelo mundo inteiro
      </h1>
      <p className="text-teal-200 text-2xl text-center pb-64">
        Aqui você encontra os melhores voos do mundo
      </p>
    </header>
  );
};

export default Header;
