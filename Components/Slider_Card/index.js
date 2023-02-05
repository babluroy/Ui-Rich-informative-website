import Image from "next/image";
import React, { useState } from "react";
import style from "./index.module.css";

const Slider_Card = ({ data }) => {
  return (
    <div className={style.mainpart}>
      <div className={style.imagepart}>
        <Image src={data.image}></Image>
        <div>
          <h1 className={style.headinguppertext}>{data.headinguppertext}</h1>
          <h1 className={style.headingbelowpart}>{data.Headingbelowtext}</h1>
        </div>
      </div>
      <div className={style.detailspart}>
        <h1>{data.slidernumber}</h1>
        <p>{data.belowtext}</p>
      </div>
    </div>
  );
};

export default Slider_Card;
