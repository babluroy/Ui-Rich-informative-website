import React,{useContext} from "react";
import style from "./index.module.css";
import arrow from "../../assets/image/Service_Business/arrow.svg";
import hero_image from "../../assets/image/Service_Business/hero image.png";
import Image from "next/image";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Business_Hero = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <div className="container">
      <div className={style.hero}>
        <div className={style.text_part}>
          <div className={style.uppertext}>
            <h5>Home </h5>
            <Image src={arrow}></Image>
            <h5>Services</h5>
            <Image src={arrow}></Image>
          </div>
          <span
           onMouseEnter={() => {
            changeCursor("size_change")
            }}
            onMouseLeave={() => {
              changeCursor()
            }}
          >Business</span>
          <p>
            Maximize your online presence and reach your target audience with our expert marketing
            strategies. From content creation to campaign management, we'll help you establish a
            strong brand image and drive conversions.
          </p>
        </div>
        <div className={style.image_box}>
          <Image src={hero_image}></Image>
        </div>
      </div>
    </div>
  );
};

export default Business_Hero;
