import React from "react";

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
    <div>
      <Header />
      <Main setData={setData}/>
      <footer className="w-full flex justify-center">
        <div className="md:max-w-lg m-4 bg-gray-100 p-3 rounded-lg overflow-hidden">
          <p className="text-gray-500 font-bold mb-1">VALOR DO FORM</p>
          <pre><code>
{`{
  'origem': ${data.origin},  
  'destino': ${data.destiny},  
  'data': ${data.date},  
  'pessoas': ${data.people}
}`}
          </code></pre>
        </div>
      </footer>
    </div>
  );
};

Home.displayName = "Home";
export default Home;
