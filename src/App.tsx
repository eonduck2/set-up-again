import React from "react";
import myName from "../static/basic-data";
import Hee from "./MyName";

const App: React.FC = () => {
  return (
    <>
      <Hee textNode={myName} />
      <h1>ㅎㅇ</h1>
    </>
  );
};

export default App;
