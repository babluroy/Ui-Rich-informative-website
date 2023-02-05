import React from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/Service_Technology/img1.svg";
import img2 from "../../assets/image/Service_Technology/img2.svg";
import img3 from "../../assets/image/Service_Technology/img3.svg";
import img4 from "../../assets/image/Service_Technology/img4.svg";
import img5 from "../../assets/image/Service_Technology/img5.svg";
import img6 from "../../assets/image/Service_Technology/img6.svg";
import img7 from "../../assets/image/Service_Technology/img7.svg";
import img8 from "../../assets/image/Service_Technology/img8.svg";
import img9 from "../../assets/image/Service_Technology/img9.svg";
import img10 from "../../assets/image/Service_Technology/img10.svg";
import img11 from "../../assets/image/Service_Technology/img11.svg";
import img12 from "../../assets/image/Service_Technology/img12.svg";
import img13 from "../../assets/image/Service_Technology/img13.svg";
import img14 from "../../assets/image/Service_Technology/img14.svg";
import img15 from "../../assets/image/Service_Technology/img15.svg";
import Expertise_Card from "../Expertise_Card";

const Technology_Expertise = () => {
  const image_data = [
    {
      id: 1,
      image: img1,
      text: "React",
    },
    {
      id: 2,
      image: img2,
      text: "Angular",
    },
    {
      id: 3,
      image: img3,
      text: "Node.js",
    },
    {
      id: 4,
      image: img4,
      text: "Android Studio",
    },
    {
      id: 5,
      image: img5,
      text: "Flutter",
    },
    {
      id: 6,
      image: img6,
      text: "Swift",
    },
    {
      id: 7,
      image: img7,
      text: "MongoDB",
    },
    {
      id: 8,
      image: img8,
      text: "MySQL",
    },
    {
      id: 9,
      image: img9,
      text: "PHP",
    },
    {
      id: 10,
      image: img10,
      text: "HTML",
    },
    {
      id: 11,
      image: img11,
      text: "CSS",
    },
    {
      id: 12,
      image: img12,
      text: "JavaScript",
    },
    {
      id: 13,
      image: img13,
      text: "Java",
    },
    {
      id: 14,
      image: img14,
      text: "Python",
    },
    {
      id: 15,
      image: img15,
      text: "Jenkins",
    },
  ];
  return (
    <div className="container">
      <div className={style.mainpart}>
        <span className={style.our_heding}>Our</span>
        <span className={style.expertise_heading}>Expertise</span>
        <div className={style.image_container}>
          {image_data.map((data) => (
            <Expertise_Card key={data.id} expertisedata={data}></Expertise_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology_Expertise;
