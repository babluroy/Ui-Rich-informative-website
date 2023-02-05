import React,{useContext} from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/Our Works/img1.png";
import img2 from "../../assets/image/Our Works/img2.png";
import img3 from "../../assets/image/Our Works/img3.png";
import img4 from "../../assets/image/Our Works/img4.png";
import img5 from "../../assets/image/Our Works/img5.png";
import img6 from "../../assets/image/Our Works/img6.png";
import img7 from "../../assets/image/Our Works/img7.png";
import img8 from "../../assets/image/Our Works/img8.png";
import Our_Works_Cards from "../Our_works_Cards";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Our_Works = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }
  
  const workdata = [
    {
      id: 1,
      image: img1,
      header: "The Reliable Accountants",
      tag1: "design",
    },
    {
      id: 2,
      image: img2,
      header: "The Endocrine Care",
      tag1: "design",
      tag2: "Technology",
      tag3: "Business",
    },
    {
      id: 3,
      image: img3,
      header: "Gastos Private Limited",
      tag1: "design",
      tag2: "Technology",
      tag3: "Business",
    },
    {
      id: 4,
      image: img4,
      header: "The Village Pizzaria",
      tag1: "design",
    },
    {
      id: 5,
      image: img5,
      header: "Uniliv - Experiential Living",
      tag1: "design",
      tag2: "Technology",
    },
    {
      id: 6,
      image: img6,
      header: "Skill Mantra",
      tag1: "design",
    },
    {
      id: 7,
      image: img7,
      header: "Fallacy Space",
      tag1: "design",
    },
    {
      id: 8,
      image: img8,
      header: "Axplorify - Travel & Explore",
      tag1: "design",
      tag2: "Technology",
    },
  ];
  return (
    <div className="container mb-5">
      <div className={style.mainpart}>
        <span
          onMouseEnter={() => {
          changeCursor("size_change")
          }}
          onMouseLeave={() => {
            changeCursor()
          }}>
          <span className={style.client}>Client</span>
          <span className={style.book}>Book</span>
        </span>
        <span className={style.happy_client}>Our Happy clients</span>
      </div>
      <div>
        {workdata.map((data) => (
          <Our_Works_Cards key={data.id} data={data}></Our_Works_Cards>
        ))}
      </div>
    </div>
  );
};

export default Our_Works;
