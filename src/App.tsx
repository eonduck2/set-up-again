import React from "react";
import myName from "../static/basic-data";
import Hee from "./MyName";
import Lii from "./U-Li";
import ourNames from "../static/names";

const App: React.FC = () => {
  return (
    <>
      <Hee textNode={myName} />
      <Lii />
      <h1>ㅎㅇ</h1>
    </>
  );
};

export default App;
