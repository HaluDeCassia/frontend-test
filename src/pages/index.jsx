import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  const [data, setData] = React.useState({
    origin: 'São Paulo, Brazil',
    destiny: 'Rio de Janeiro, Brazil',
    date: 'Sábado 14/4 - Quinta 19/04',
    people: 1
  });

  return (
    <React.Fragment>
      <Header />
      <Main setData={setData}/>
      <Footer data={data} />
    </React.Fragment>
  );
};

Home.displayName = "Home";
export default Home;
