import React from "react";
import myName from "../static/basic-data";
import Hee from "./MyName";
import Lii from "./U-Li";
import ourNames from "../static/names";
import Su from "./Su";

const App: React.FC = () => {
  return (
    <>
      <Hee textNode={myName} />
      <Lii listItem={ourNames} />
      <Su h1TN="테스트" />
      <h1>ㅎㅇ</h1>
    </>
  );
};

export default App;
