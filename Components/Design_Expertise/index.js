import React from "react";
import xd from "../../assets/image/Service_Design/adobe-xd.svg";
import figma from "../../assets/image/Service_Design/figma.svg";
import illustrator from "../../assets/image/Service_Design/adobe-illustrator-cc.svg";
import indesign from "../../assets/image/Service_Design/indesign-cc.svg";
import after_effect from "../../assets/image/Service_Design/after-effects-cc.svg";
import photoshop from "../../assets/image/Service_Design/photoshop-cc.svg";
import style from "./index.module.css";
import Expertise_Card from "../Expertise_Card";

const Design_Expertise = () => {
  const image_data = [
    {
      id: 1,
      image: xd,
      text: "Adobe XD",
    },
    {
      id: 2,
      image: figma,
      text: "Figma",
    },
    {
      id: 3,
      image: illustrator,
      text: "Adobe Illustrator",
    },
    {
      id: 4,
      image: indesign,
      text: "Adobe InDesign",
    },
    {
      id: 5,
      image: after_effect,
      text: "Adobe After Effects",
    },
    {
      id: 6,
      image: photoshop,
      text: "Adobe Photoshop",
    },
  ];
  return (
    <div className="container">
      <div className={style.mainpart}>
        <span className={style.our_heding}>Our</span>
        <span className={style.expertise_heading}>Expertise</span>
        <div className={style.image_container}>
          {image_data.map((data) => (
            <Expertise_Card key={data.id} expertisedata={data}></Expertise_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design_Expertise;
