import React from "react";

const Footer = ({ data }) => {
  return (
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
  );
};

export default Footer;
