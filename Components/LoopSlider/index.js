import React,{useContext} from "react";
import { slider, slide, slide_text, slide_track } from "./index.module.css";
import BlueStar from "../../assets/image/landingPage/blue_star.svg";
import PinkStar from "../../assets/image/landingPage/pink_star.svg";
import GreenStar from "../../assets/image/landingPage/green_star.svg";
import Image from "next/image";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const LoopSlider = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <div className={slider} 
      onMouseEnter={() => {
      changeCursor("color_change")
      }}
      onMouseLeave={() => {
        changeCursor()
      }}
    >
      <div className={slide_track}>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
        <div className={slide}>
          <Image src={GreenStar} />
          <span className={slide_text}>Captivate</span>
        </div>
        <div className={slide}>
          <Image src={BlueStar} />
          <span className={slide_text}>Convert</span>
        </div>
        <div className={slide}>
          <Image src={PinkStar} />
          <span className={slide_text}>Innovate</span>
        </div>
      </div>
    </div>
  );
};

export default LoopSlider;
