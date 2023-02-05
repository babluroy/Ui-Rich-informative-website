import Quote from "@/Components/Quote";
import Technology_Expertise from "@/Components/Technology_Expertise";
import Technology_Hero from "@/Components/Technology_Hero";
import Technology_Services from "@/Components/Technology_Services";
import Technology_Slider from "@/Components/Technology_Slider";
import React from "react";

const index = () => {
  return (
    <div>
      <Technology_Hero />
      <Technology_Services />
      <Technology_Slider />
      <Technology_Expertise />
      <Quote />
    </div>
  );
};

export default index;
