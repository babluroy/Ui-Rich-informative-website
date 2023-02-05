import React,{useContext} from "react";
import img1 from "../../assets/image/Service_Business/Business Slider/img1.svg";
import img2 from "../../assets/image/Service_Business/Business Slider/img2.svg";
import img3 from "../../assets/image/Service_Business/Business Slider/img3.svg";
import img4 from "../../assets/image/Service_Business/Business Slider/img4.svg";
import img5 from "../../assets/image/Service_Business/Business Slider/img5.svg";
import img6 from "../../assets/image/Service_Business/Business Slider/img6.svg";
import img7 from "../../assets/image/Service_Business/Business Slider/img7.svg";
import Slider_Card from "../Slider_Card";
import style from "./index.module.css";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Business_Slider = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const sliderdata = [
    {
      id: 1,
      image: img1,
      headinguppertext: "Research &",
      Headingbelowtext: "Planning",
      belowtext:
        "This Involves researching the target audience, gathering requirements, and defining the goals and the objectives of the user-interface.",
      slidernumber: "01",
    },
    {
      id: 2,
      image: img2,
      headinguppertext: "Strategy",
      Headingbelowtext: "Development",
      belowtext:
        "This step involves creating a plan for the campaign, including goals, target audience, message, channels, and budget.",
      slidernumber: "02",
    },
    {
      id: 3,
      image: img3,
      headinguppertext: "Creative",
      Headingbelowtext: "Development",
      belowtext:
        "This step involves creating the visual and written content for the campaign, such as ads, social media posts, email marketing, etc.",
      slidernumber: "03",
    },
    {
      id: 4,
      image: img4,
      headinguppertext: "Execution",
      belowtext:
        "This step involves implementing the campaign, such as distributing ads, posting on social media, sending emails, etc.",
      slidernumber: "04",
    },
    {
      id: 5,
      image: img5,
      headinguppertext: "Monitoring &",
      Headingbelowtext: "Analysis",
      belowtext:
        "This step involves tracking the performance of the campaign and analyzing the results to determine its effectiveness and make any adjustments.",
      slidernumber: "05",
    },
    {
      id: 6,
      image: img6,
      headinguppertext: "Optimization",
      belowtext:
        "This step involves making adjustments to the campaign based on the results of the monitoring and analysis, like the target audience, message, or channels.",
      slidernumber: "06",
    },
    {
      id: 7,
      image: img7,
      headinguppertext: "Reporting & ROI",
      Headingbelowtext: "Analysis",
      belowtext:
        "This step involves making adjustments to the campaign based on the results of the monitoring and analysis, like the target audience, message, or channels.",
      slidernumber: "06",
    },
  ];
  return (
    <div className={style.sliderpart}
      onMouseEnter={() => {
      changeCursor("color_change")
      }}
      onMouseLeave={() => {
        changeCursor()
      }}
    >
      <div className="container">
        <div className={style.upperpart}>
          <h1>Our Process</h1>
          <p>
            We aim to keep you at updated at all times of the design process. Here is a tentative
            step-by-step process for our design work.
          </p>
        </div>
        <div className={style.belowpart}>
          {sliderdata.map((data) => (
            <Slider_Card key={data.id} data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business_Slider;
