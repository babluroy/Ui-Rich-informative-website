import Design_Expertise from "@/Components/Design_Expertise";
import Design_hero from "@/Components/Design_Hero";
import Design_Services from "@/Components/Design_Services";
import Design_Slider from "@/Components/Design_Slider";
import Quote from "@/Components/Quote";
import React from "react";

const index = () => {
  return (
    <div>
      <Design_hero />
      <Design_Services />
      <Design_Slider />
      <Design_Expertise />
      <Quote />
    </div>
  );
};

export default index;
