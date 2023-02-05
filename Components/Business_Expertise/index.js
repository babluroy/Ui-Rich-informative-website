import React,{Fragment, useContext} from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/Service_Business/img1.svg";
import img2 from "../../assets/image/Service_Business/img2.svg";
import img3 from "../../assets/image/Service_Business/img3.png";
import img4 from "../../assets/image/Service_Business/img4.svg";
import img5 from "../../assets/image/Service_Business/img5.svg";
import img6 from "../../assets/image/Service_Business/img6.svg";
import img7 from "../../assets/image/Service_Business/img7.svg";
import img8 from "../../assets/image/Service_Business/img8.svg";
import img9 from "../../assets/image/Service_Business/img9.svg";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

import Expertise_Card from "../Expertise_Card";

const Business_Expertise = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const image_data = [
    {
      id: 1,
      image: img1,
      text: "Google Analytics",
    },
    {
      id: 2,
      image: img2,
      text: "Internet Marketing",
    },
    {
      id: 3,
      image: img3,
      text: "Social Media Marketing",
    },
    {
      id: 4,
      image: img4,
      text: "Content Writing",
    },
    {
      id: 5,
      image: img5,
      text: "Branding",
    },
    {
      id: 6,
      image: img6,
      text: "Google Ads Campaign",
    },
    {
      id: 7,
      image: img7,
      text: "Print Media",
    },
    {
      id: 8,
      image: img8,
      text: "Business Consulting",
    },
    {
      id: 9,
      image: img9,
      text: "Hubspot",
    },
  ];
  return (
    <div className="container">
      <div className={style.mainpart}>
        <div
         onMouseEnter={() => {
          changeCursor("size_change")
          }}
          onMouseLeave={() => {
            changeCursor()
          }}
        >
        <span className={style.our_heding}
        >Our</span>
        <span className={style.expertise_heading}>Expertise</span>
        </div>
        <div className={style.image_container}>
          {image_data.map((data) => (
            <Expertise_Card key={data.id} expertisedata={data}></Expertise_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business_Expertise;
