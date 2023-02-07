import React, { useContext } from "react";
import Image from "next/image";
import peopleimg from "../../assets/image/Innovate/people.png";
import overlay from "../../assets/image/Innovate/overlay.png";
import star from "../../assets/image/Innovate/star_innovate.png";
import style from "./index.module.css";
import circle from "../../assets/image/Innovate/circle-text.png";
import circlearrow from "../../assets/image/Innovate/circle-arrow.png";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Innovate = () => {
  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  return (
    <div className="container">
      <section className={style.innovate_section}>
        <div className={style.images_all}>
          <Image className={style.peopleimage} src={peopleimg}></Image>
          <Image className={style.overlayimage} src={overlay}></Image>
          <Image className={style.imagestar} src={star}></Image>
          <Image className={style.circle} src={circle}></Image>
          <Image className={style.circlearrow} src={circlearrow}></Image>
        </div>

        <div
          className={style.innovatepart}
          onMouseEnter={() => {
            changeCursor("size_defference");
          }}
          onMouseLeave={() => {
            changeCursor();
          }}
        >
          <div className={style.innovateupper}>
            <span className={style.text_container}>Innovate,</span>{" "}
            <span className={style.text_container}>Convert</span> <br />
          </div>
          <span className={style.text_container}>& Captivate</span>
        </div>
        <p className={style.servcetext}>
          "Our Service offerings have helped companies increase efficiency, reduce costs, and drive
          growth."
        </p>
      </section>
    </div>
  );
};

export default Innovate;
