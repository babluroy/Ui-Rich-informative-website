import React,{useContext} from "react";
import Link from "next/link";
import style from "./index.module.css";
import startop from "../../assets/image/Quote/right-top.png";
import stardown from "../../assets/image/Quote/left-down.png";
import Image from "next/image";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Quote = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <section className="container"
      onMouseEnter={() => {
        changeCursor("color_change")
      }}
      onMouseLeave={() => {
        changeCursor()
      }}
    >
      <div className={style.quote_container}>
        <div className={style.mainpart}>
          <h3>Let's create a measurable impact on your business.</h3>
          <div className={style.button_parts}>
            <Link href={Routingvariables.contact} className={style.button_quote}>
              Request A Quote
            </Link>
          </div>
          <Image className={style.topstar} src={startop}></Image>
          <Image className={style.downstar} src={stardown}></Image>
        </div>
      </div>
    </section>
  );
};

export default Quote;
