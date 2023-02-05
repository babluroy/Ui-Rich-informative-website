import React,{useContext} from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/Service_Technology/Technology Slider/img1.svg";
import img2 from "../../assets/image/Service_Technology/Technology Slider/img2.svg";
import img3 from "../../assets/image/Service_Technology/Technology Slider/img3.svg";
import img4 from "../../assets/image/Service_Technology/Technology Slider/img4.svg";
import img5 from "../../assets/image/Service_Technology/Technology Slider/img5.svg";
import img6 from "../../assets/image/Service_Technology/Technology Slider/img6.svg";
import Slider_Card from "../Slider_Card";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Technology_Slider = () => {

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  const sliderdata = [
    {
      id: 1,
      image: img1,
      headinguppertext: "Requirements",
      Headingbelowtext: "Gathering",
      belowtext:
        "This step involves identifying and documenting the needs and goals of the software.",
      slidernumber: "01",
    },
    {
      id: 2,
      image: img2,
      headinguppertext: "Design",
      belowtext:
        "This step involves creating a plan for how the software will be built, including the overall architecture, user interface, and specific features.",
      slidernumber: "02",
    },
    {
      id: 3,
      image: img3,
      headinguppertext: "Implementation",
      belowtext:
        "This step involves writing the code for the software, testing it, and fixing any bugs that are found.",
      slidernumber: "03",
    },
    {
      id: 4,
      image: img4,
      headinguppertext: "Testing",
      belowtext:
        "This step involves verifying that the software meets the requirements and works correctly.",
      slidernumber: "04",
    },
    {
      id: 5,
      image: img5,
      headinguppertext: "Deployment",
      belowtext:
        "This step involves installing the software on the target system and making it available to users.",
      slidernumber: "05",
    },
    {
      id: 6,
      image: img6,
      headinguppertext: "Maintenance",
      belowtext:
        "This step involves providing ongoing support for the software, including bug fixes, updates, and security patches.",
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

export default Technology_Slider;
