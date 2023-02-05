import React,{useContext} from "react";
import Image from "next/image";
import Service_Card from "../Service_Card";
import style from "./index.module.css";
import leftstar from "../../assets/image//Service_Business/left_star.png";
import rightstart from "../../assets/image//Service_Business/right_star.png";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Business_Service = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const service_data = [
    {
      id: 1,
      name: "email marketing",
    },
    {
      id: 2,
      name: "branding",
    },
    {
      id: 3,
      name: "content marketing",
    },
    {
      id: 4,
      name: "PPC CAMPAIGN",
    },
    {
      id: 5,
      name: "seo",
    },
    {
      id: 6,
      name: "social media marketing",
    },
    {
      id: 7,
      name: "Pitch Design",
    },
    {
      id: 8,
      name: "Evaluation",
    },
    {
      id: 9,
      name: "ITR filing & Compliances ",
    },
  ];
  return (
    <div className={style.mainpart}>
      <div className="container">
        <div className={style.servicepart}
         onMouseEnter={() => {
          changeCursor("size_change")
          }}
          onMouseLeave={() => {
            changeCursor()
          }}
        >
          <p>Our</p>
          <span>Services</span>
        </div>
        <p className={style.paragraph}>
          We analyze human behavioral patterns and blend them with data science and information
          architecture to design a unique 'blended experience'.
        </p>
        <div className={style.service_list}>
          {service_data.map((data) => (
            <Service_Card key={data.id} servicedata={data}></Service_Card>
          ))}
        </div>
      </div>
      <Image className={style.left_star} src={leftstar}></Image>
      <Image className={style.right_star} src={rightstart}></Image>
    </div>
  );
};

export default Business_Service;
