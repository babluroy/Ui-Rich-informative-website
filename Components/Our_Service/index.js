import React,{useContext} from "react";
import style from "./index.module.css";
import GreenCircle from "../../assets/image/landingPage/green_circle.svg";
import PinkCircle from "../../assets/image/landingPage/pink_circle.svg";
import BlueCircle from "../../assets/image/landingPage/blue_circle.svg";
import Image from "next/image";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Our_Service = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const designdata = [
    {
      id: 1,
      name: "Logo Design",
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

  const technologydata = [
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

  const businessdata = [
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
      name: "ITR filing & Compliances",
    },
  ];
  return (
    <div className={style.service_container}
      onMouseEnter={() => {
      changeCursor("color_change")
      }}
      onMouseLeave={() => {
        changeCursor()
      }}
    >
      <div className="container">
        <div className={style.service_header}>
          <div className={style.service_title_container}>
            <span>Our</span>
            <span>Service</span>
          </div>
          <p className={style.service_text}>
            We aim to keep you at updated at all times of the design process. Here is a tentative
            step-by-step process for our design work.
          </p>
        </div>
        {/* ---------------Design section--------------- */}
        <div className={style.belowmain}>
          <div className={style.design_container}>
            <div className={style.service_category_title}>
              <div className={style.circle_container}>
                <Image src={GreenCircle} />
              </div>
              <h3>DESIGN</h3>
            </div>
            <div className={style.design_text}>
              {designdata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
          {/* ---------------Technology section--------------- */}
          <div className={style.technology_container}>
            <div className={style.service_category_title}>
              <div className={style.circle_container}>
                <Image src={PinkCircle} />
              </div>
              <h3>TECHNOLOGY</h3>
            </div>
            <div className={style.design_text}>
              {technologydata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
          {/* ---------------business section--------------- */}
          <div className={style.business_container}>
            <div className={style.service_category_title}>
              <div className={style.circle_container}>
                <Image src={BlueCircle} />
              </div>
              <h3>BUSINESS</h3>
            </div>
            <div className={style.design_text}>
              {businessdata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Service;
