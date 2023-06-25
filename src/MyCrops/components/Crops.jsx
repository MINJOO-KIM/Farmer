import React from "react";
import CropItems from "./CropItems";

const Crops = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <CropItems key={item.id} species={item.species} name={item.name} />
      ))}
    </>
  );
};

export default Crops;
