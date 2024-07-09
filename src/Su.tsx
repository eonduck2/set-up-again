import React from "react";

type TSuProps = {
  h1TN: string;
};

let styles: React.CSSProperties = {
  color: "blue",
};

const Hee: React.FC<TSuProps> = ({ h1TN }) => {
  return <h1 style={styles}>{h1TN}</h1>;
};

export default Hee;
