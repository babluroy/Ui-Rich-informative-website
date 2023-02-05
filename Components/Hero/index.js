import React, { useEffect, useState, useRef, useContext } from "react";
import {
  hero_container,
  hero_left,
  hero_right,
  hero_title_container,
  hero_title,
  hero_body,
  hero_btn,
} from "./index.module.css";
import hero_design from "../../assets/image/landingPage/hero-design.png";
import hero_business from "../../assets/image/landingPage/hero-business.png";
import hero_tech from "../../assets/image/landingPage/hero-tech.png";
import Image from "next/image";
import Link from "next/link";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Hero = () => {
  const INITIAL_TIMER = 0;
  const TARGET_TIMER = 0;
  const hero_categories = {
    design: "design",
    tech: "tech",
    business: "business",
  };
  
  const getCursorContext = useContext(CursorContext);

  const [hoverImage, setHoverImage] = useState("design");
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const interval = useRef();

  useEffect(() => {
    if (isAutoSlide) {
      if (hoverImage == hero_categories.design) {
        setHoverImage(hero_categories.tech);
      } else if (hoverImage == hero_categories.tech) {
        setHoverImage(hero_categories.business);
      } else {
        setHoverImage(hero_categories.design);
      }
    }
  }, [timer, isAutoSlide]);

  useEffect(() => {
    function handleTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count + 1);
      }, 1500);
    }

    if (timer <= TARGET_TIMER && interval.current) {
      clearInterval(interval.current);
    }
    if (timer === INITIAL_TIMER) {
      handleTimer();
    }
  }, [timer]);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor)
  }

  return (
    <div className="container">
      <div className={hero_container}>
        <div className={hero_left}>
          <div className={hero_title_container}>
            <span
              className={hero_title}
              onMouseOver={() => {
                setHoverImage(hero_categories.design);
                setIsAutoSlide(false);
                changeCursor("color_size_change");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.design ? "var(--dark)" : "#fff" }}
            >
              Design
            </span>
            <span
              className={hero_title}
              onMouseOver={() => {
                setHoverImage(hero_categories.tech);
                setIsAutoSlide(false);
                changeCursor("color_size_change");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.tech ? "var(--dark)" : "#fff" }}
            >
              Technology
            </span>
            <span
              className={hero_title}
              onMouseOver={() => {
                setHoverImage(hero_categories.business);
                setIsAutoSlide(false);
                changeCursor("color_size_change");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.business ? "var(--dark)" : "#fff" }}
            >
              Business
            </span>
          </div>
          <p className={hero_body}>
            Transform Your Business with Our Expert Design, Development, and Marketing Services.
          </p>
          <Link href={Routingvariables.contact} className={hero_btn}>
            Get Started
          </Link>
        </div>
        <div className={hero_right}>
          {hoverImage == hero_categories.design ? (
            <Image
              alt=""
              data-aos="zoom-in"
              src={hero_design}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}

          {hoverImage == hero_categories.tech ? (
            <Image
              alt=""
              data-aos="zoom-in"
              src={hero_tech}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}

          {hoverImage == hero_categories.business ? (
            <Image
              alt=""
              data-aos="zoom-in"
              src={hero_business}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
