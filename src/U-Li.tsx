import React from "react";
import ourNames from "../static/names";

const Lii: React.FC = () => {
  return (
    <ul>
      {ourNames.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Lii;
