import React,{useContext} from "react";
import Image from "next/image";
import style from "./index.module.css";
import leftstar from "../../assets/image/Service_Design/left_star.png";
import rightstart from "../../assets/image/Service_Design/right_star.png";
import Service_Card from "../Service_Card";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Design_Services = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const service_data = [
    {
      id: 1,
      name: "LOGO design",
    },
    {
      id: 2,
      name: "BRANDING",
    },
    {
      id: 3,
      name: "ILLUSTRATION",
    },
    {
      id: 4,
      name: "Graphic design",
    },
    {
      id: 5,
      name: "web design",
    },
    {
      id: 6,
      name: "ux design",
    },
    {
      id: 7,
      name: "design system",
    },
    {
      id: 8,
      name: "ui design",
    },
    {
      id: 9,
      name: "ui/ux consultancy",
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

export default Design_Services;
