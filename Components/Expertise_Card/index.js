import React, { useState, useContext } from "react";
import Image from "next/image";
import style from "./index.module.css";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Expertise_Card = ({ expertisedata }) => {

  const getCursorContext = useContext(CursorContext);

  const [show, setShow] = useState(false);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <div
      className={style.box_container}
      onMouseEnter={() => {
        setShow(true);
        changeCursor("color_change")

      }}
      onMouseLeave={() => {
        setShow(false);
        changeCursor()
      }}
     >
      {show ? 
        <div data-aos="flip-right">
          <h2>{expertisedata.text}</h2>
        </div> :
        <Image src={expertisedata.image} />
       }
    </div>
  );
};

export default Expertise_Card;
