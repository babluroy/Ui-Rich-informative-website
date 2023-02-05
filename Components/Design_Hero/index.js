import React,{useContext} from "react";
import style from "./index.module.css";
import hero_image from "../../assets/image/Service_Design/hero image.png";
import Image from "next/image";
import arrow from "../../assets/image/Service_Design/arrow.svg";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Design_hero = () => {

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
          >Design</span>
          <p>
            We analyze human behavioral patterns and blend them with data science and information
            architecture to design a unique 'blended experience'.
          </p>
        </div>
        <div className={style.image_box}>
          <Image src={hero_image}></Image>
        </div>
      </div>
    </div>
  );
};

export default Design_hero;
