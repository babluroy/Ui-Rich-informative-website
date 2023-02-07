import React,{useState,useContext} from "react";
import Image from "next/image";
import style from "./index.module.css";
import shape from "../../assets/image/Contact Us/shape.svg";
import hand from "../../assets/image/Contact Us/hand.svg";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Contact_Us = () => {

  const categoryNames = {
    design: "Design",
    tech: "TECHNOLOGY",
    business: "BUSINESS"
  }

  const getCursorContext = useContext(CursorContext);

  const [category, setCategory] = useState("")

  const getCategory = (value) => {
    setCategory(value)
  }

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <div className="container">
      <div className={style.mainpart}>
        <h2 className={style.headertext}>
          Hey! Tell us all <br /> the things{" "}
          <Image className={style.hand_design} src={hand} alt="contact"></Image>
        </h2>
        <p className={style.below_header}>Fill the form below and we'll get back to you.</p>
        <p className={style.below_peragraph}>I'm interested in...</p>
        <div>
        <div className={style.designtext_container}>
            <button className={style.boxtext_design} 
              onClick={() => {
                getCategory(categoryNames.design)
              }}
              style={{backgroundColor: category == categoryNames.design ? "#181818": "#fff", color: category == categoryNames.design ? "#fff" : "#000"}}
              onMouseEnter={() => {
                changeCursor("size_change")
              }}
              onMouseLeave={() => {
                changeCursor()
              }}
              >DESIGN</button>
              <button className={style.boxtext_technology}
               onClick={() => {
                getCategory(categoryNames.tech)
              }}
              style={{backgroundColor: category == categoryNames.tech ? "#181818" : "#fff", color: category == categoryNames.tech ? "#fff" : "#000"}}
              onMouseEnter={() => {
                changeCursor("size_change")
              }}
              onMouseLeave={() => {
                changeCursor()
              }}
              >TECHNOLOGY</button>
              <button className={style.boxtext_business}
               onClick={() => {
                getCategory(categoryNames.business)
              }}
              style={{backgroundColor: category == categoryNames.business ? "#181818" : "#fff", color: category == categoryNames.business ? "#fff" : "#000"}}
              onMouseEnter={() => {
                changeCursor("size_change")
              }}
              onMouseLeave={() => {
                changeCursor()
              }}
             >BUSINESS</button>
            </div>
          <form 
            action="#"
            method="POST"        
            className={style.input_form}>
            <input
              className={style.input_container}
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className={style.input_container}
              type="email"
              name="email"
              placeholder="Your Email address"
            />
            <input
              className={style.input_container}
              type="text"
              name="description"
              placeholder="Tell us about your project"
            />
             <input
              className={style.input_container}
              type="text"
              name="category"
              value={category}
              hidden
              readOnly
            />
            <div className={style.budget}>
              <h5 className={style.below_peragraph}>Project Budget</h5>
              <div className={style.selector}>
                <select name="currency">
                  <option value="USD">usd</option>
                  <option value="RS">rupee</option>
                </select>
              </div>
              <div className={style.budget_input}>
                <input type="text" className={style.input_container} name="budget" placeholder="e.g. 200000" />
              </div>
            </div>
            {/* <div className={style.attachment_part}>
              <Image src={shape} alt="Image"></Image>
              <input type="file" className={style.custom_file_input}></input>
            </div> */}
            <input className={style.button_send} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
