import React from "react";

import Form from "../Form";

const Main = ({ setData }) => {
  return (
    <main className="w-full flex justify-center -mt-64">
      <Form setData={setData} />
    </main>
  );
};

export default Main;
