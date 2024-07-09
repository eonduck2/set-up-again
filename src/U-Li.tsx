import React from "react";

type TListItem = {
  listItem: string[];
};

const Lii: React.FC<TListItem> = ({ listItem }) => {
  return (
    <ul>
      {listItem.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Lii;
