import React from "react";

import BottomNav from "../BottomNav/BottomNav";
import Header from "../Header/Header";
import Crops from "./components/Crops";
import { useNavigate } from "react-router-dom";
import "./css/MyCrops.css";
import btnImg from "./img/regist-crop-btn.png";

const MyCrops = () => {
  const navigate = useNavigate();
  const navigateToRegistCrop = () => {
    navigate("/register");
  };
  const crops = [
    {
      id: "1",
      species: "상추",
      name: "상추도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
    {
      id: "2",
      species: "배추",
      name: "배추도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
    {
      id: "3",
      species: "대파",
      name: "대파도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
  ];
  return (
    <>
      <div className="my-crops-container">
        <Header text="내 작물" />
        <div>
          <Crops items={crops} />
          <img
            src={btnImg}
            className="regist-crop-btn"
            onClick={navigateToRegistCrop}
            alt=""
          />
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default MyCrops;
