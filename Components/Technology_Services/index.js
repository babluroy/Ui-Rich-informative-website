import React,{useContext} from "react";
import Image from "next/image";
import style from "./index.module.css";
import left_star from "../../assets/image/Service_Technology/left_star.png";
import right_star from "../../assets/image/Service_Technology/right_star.png";
import Service_Card from "../Service_Card";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Technology_Services = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const service_data = [
    {
      id: 1,
      name: "WEB DEVELOPMENT",
    },
    {
      id: 2,
      name: "SAAS building",
    },
    {
      id: 3,
      name: "E-COMMERCE",
    },
    {
      id: 4,
      name: "WORDPRESS",
    },
    {
      id: 5,
      name: "Qa testing",
    },
    {
      id: 6,
      name: "API integration",
    },
    {
      id: 7,
      name: "ios App",
    },
    {
      id: 8,
      name: "Android App",
    },
    {
      id: 9,
      name: "Hybrid app",
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
      <Image className={style.left_star} src={left_star}></Image>
      <Image className={style.right_star} src={right_star}></Image>
    </div>
  );
};

export default Technology_Services;
