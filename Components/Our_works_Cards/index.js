import Image from "next/image";
import React from "react";
import style from "./index.module.css";

const Our_Works_Cards = ({ data }) => {
  return (
    <div className={style.cardspart}>
      <h1>{data.header}</h1>
      <div className={style.spanpart}>
        {data.tag1 && <span className={style.tag1}>{data.tag1}</span>}
        {data.tag2 && <span className={style.tag2}>{data.tag2}</span>}
        {data.tag3 && <span className={style.tag}>{data.tag3}</span>}
      </div>
      <Image src={data.image} loading="lazy" alt="works"></Image>
    </div>
  );
};

export default Our_Works_Cards;
