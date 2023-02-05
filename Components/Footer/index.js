import React,{ useEffect, useState,useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInImg from "../../assets/image/LinkedIn.png";
import InstagramImg from "../../assets/image/instagram.png";
import Email from "../../assets/image/email.png";
import {
  footer,
  first_row,
  outline,
  align_right,
  subtitle,
  last_row,
  footer_contact,
  social_icon_container,
  copyright,
  copyright_band,
  copyright_text,
} from "./index.module.css";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Footer = () => {

  const getCursorContext = useContext(CursorContext);

  const [year, setYear] = useState("")

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear())
  },[])

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <footer
      className={footer}
      onMouseEnter={() => {
        changeCursor("color_change")
        }}
        onMouseLeave={() => {
          changeCursor()
        }}
    >
      <div className="container">
        <div className={first_row}>
          <div>
            <h2>
              Have an <span className={outline}>Idea</span> ?
            </h2>
            <div className={subtitle}>
              <h3>Let's Connect!</h3>
            </div>
          </div>
          <div className={align_right}>
            <ul>
              <li>
                <Link href={Routingvariables.services_design}>Design</Link>
              </li>
              <li>
                <Link href={Routingvariables.services_technology}>Development</Link>
              </li>
              <li>
                <Link href={Routingvariables.services_business}>Marketing</Link>
              </li>
            </ul>
          </div>
          <div className={align_right}>
            <ul>
              <li>
                <Link href={Routingvariables.about}>About Us</Link>
              </li>
              <li>
                <Link href={Routingvariables.works}>Our Work</Link>
              </li>
              <li>
                <Link href={Routingvariables.contact}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={last_row}>
          <div className={footer_contact}>
            <a href="mailto:info@domain.com" target="_blank"><p>info@domain.com</p></a>
            <div className={social_icon_container}>
              <a href="#" target="_blank">
                <Image src={LinkedInImg} width={24} height={24} />
              </a>
              <a href="#" target="_blank">
                <Image src={InstagramImg} width={24} height={24} />
              </a>
              <a href="mailto:info@domain.com" target="_blank">
                <Image src={Email} width={34} height={24} />
              </a>
            </div>
          </div>
          <div className={copyright}>
            <p className={copyright_band}>
              <span>&copy; </span>UI-RICH
            </p>
            <p className={copyright_text}>All Rights Reserved {year}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
