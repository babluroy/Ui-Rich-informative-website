import Business_Expertise from "@/Components/Business_Expertise";
import Business_Hero from "@/Components/Business_Hero";
import Business_Service from "@/Components/Business_Services";
import Business_Slider from "@/Components/Business_Slider";
import Quote from "@/Components/Quote";
import React from "react";

const index = () => {
  return (
    <div>
      <Business_Hero />
      <Business_Service />
      <Business_Slider />
      <Business_Expertise />
      <Quote />
    </div>
  );
};

export default index;
