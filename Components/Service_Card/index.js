import React from "react";
import style from "./index.module.css";

const Service_Card = ({ servicedata }) => {
  return (
    <div className={style.service_list}>
      <p>{servicedata.name}</p>
    </div>
  );
};

export default Service_Card;
