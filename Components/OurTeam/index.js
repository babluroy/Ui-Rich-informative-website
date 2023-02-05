import Image from "next/image";
import React from "react";
import { team_container, team_text, team_img } from "./index.module.css";
import BigGrayStar from "../../assets/image/landingPage/big_gray_star.svg";

const OurTeam = () => {
  return (
    <div className="container">
      <div className={team_container}>
        <Image src={BigGrayStar} className={team_img} />
        <p className={team_text}>
          Our team of experienced developers and designers will work with you to
          design, develop, market and deliver software that meets your unique
          needs and goals.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
