import React from "react";

interface HeeProps {
  textNode: string;
}

const Hee: React.FC<HeeProps> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};

export default Hee;
