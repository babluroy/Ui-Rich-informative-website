import React from "react";
import Image from "next/image";
import style from "./index.module.css";
import leftimage from "../../assets/image/About/left-star.png";
import rightimage from "../../assets/image/About/right-star.png";

const About = () => {
  return (
    <>
      <div className={style.about_section}>
        <div className="container">
          <h4 className={style.about_heading}>About Us</h4>
          <p>
            Our team of experienced developers and designers will work with you to design, develop,
            market and deliver software that meets your unique needs and goals.
          </p>
        </div>
        <div className={style.left_image}>
          <Image src={leftimage}></Image>
        </div>
        <div className={style.right_image}>
          <Image src={rightimage}></Image>
        </div>
      </div>
    </>
  );
};

export default About;
