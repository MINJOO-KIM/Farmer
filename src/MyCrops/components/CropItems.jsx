import React, { useState } from "react";
import "../css/CropItems.css";

const CropItems = ({ species, name }) => {
  return (
    <div className="crop-item">
      <div className="crop-item__type">{species}</div>
      <div className="crop-item__title">{name}</div>
      <div className="delete-crop-btn">삭제</div>
    </div>
  );
};

export default CropItems;
