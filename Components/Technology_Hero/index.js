import React,{useContext} from "react";
import style from "./index.module.css";
import arrow from "../../assets/image/Service_Technology/arrow.svg";
import hero_image from "../../assets/image/Service_Technology/hero image.png";
import Image from "next/image";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Technology_Hero = () => {
  
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
          >Technology</span>
          <p>
            Empower your business with our cutting-edge software solutions. Streamline your
            operations, and drive growth with our easy-to-use, cloud-based services.
          </p>
        </div>
        <div className={style.heroimage}>
          <Image src={hero_image}></Image>
        </div>
      </div>
    </div>
  );
};

export default Technology_Hero;
