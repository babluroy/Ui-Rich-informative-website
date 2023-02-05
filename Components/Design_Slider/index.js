import React,{useContext} from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/Service_Design/Design_Slider/img1.svg";
import img2 from "../../assets/image/Service_Design/Design_Slider/img2.svg";
import img3 from "../../assets/image/Service_Design/Design_Slider/img3.svg";
import img4 from "../../assets/image/Service_Design/Design_Slider/img4.svg";
import img5 from "../../assets/image/Service_Design/Design_Slider/img5.svg";
import img6 from "../../assets/image/Service_Design/Design_Slider/img6.svg";
import Slider_Card from "../Slider_Card";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Design_Slider = () => {

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
      image: img3,
      headinguppertext: "Sketching /",
      Headingbelowtext: "Wireframing",
      belowtext:
        "In this step, the designer creates rough sketches and wireframes to explore different design ideas and layouts.",
      slidernumber: "02",
    },
    {
      id: 3,
      image: img4,
      headinguppertext: "Design",
      belowtext:
        "In this step, the designer creates high fidelity mockups and prototypes of the user interface.",
      slidernumber: "03",
    },
    {
      id: 4,
      image: img5,
      headinguppertext: "Testing &",
      Headingbelowtext: "Iteration",
      belowtext:
        "In this step, the designer creates high fidelity mockups and prototypes of the user interface.",
      slidernumber: "04",
    },
    {
      id: 5,
      image: img2,
      headinguppertext: "Implementation",
      belowtext:
        "In this step, the designer creates high fidelity mockups and prototypes of the user interface.",
      slidernumber: "05",
    },
    {
      id: 6,
      image: img6,
      headinguppertext: "Maintenance",
      belowtext:
        "The designer may be responsible for ongoing maintenance and updates to the user interface.",
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
            <Slider_Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design_Slider;
