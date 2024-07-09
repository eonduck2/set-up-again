import React from "react";
import myName from "../static/basic-data";

interface HeeProps {
  textNode: string;
}

const Hee: React.FC<HeeProps> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};

const App: React.FC = () => {
  return (
    <>
      <Hee textNode={myName} />
      <h1>ㅎㅇ</h1>
    </>
  );
};

export default App;
