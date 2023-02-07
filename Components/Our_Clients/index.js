import React, { useContext } from "react";
import style from "./index.module.css";
import img1 from "../../assets/image/landingPage/Our_Clients/img1.png";
import img2 from "../../assets/image/landingPage/Our_Clients/img2.png";
import img3 from "../../assets/image/landingPage/Our_Clients/img3.png";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Our_Clients = () => {
  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  return (
    <div className={style.mainpart}>
      <div className="container">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <div
              className={style.upperText}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              <span>
                Our <br />
              </span>
              <span>Clients</span>
            </div>
            <SwiperSlide>
              <div className={style.slidercontainer}>
                <div>
                  <h2>The Endocrine Care</h2>
                  <div className={style.tagpart}>
                    <p>Design</p>
                    <p>Technology</p>
                    <p>Business</p>
                  </div>
                </div>
                <div>
                  <Image src={img1}></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slidercontainer}>
                <div>
                  {/* <div className={style.upperText}>
                    <span>
                      Our <br />
                    </span>
                    <span>Clients</span>
                  </div> */}
                  <h2>Gastos PriVate Limited</h2>
                  <div className={style.tagpart}>
                    <p>Design</p>
                    <p>Technology</p>
                    <p>Business</p>
                  </div>
                </div>
                <div>
                  <Image src={img2}></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.slidercontainer}>
                <div>
                  {/* <div className={style.upperText}>
                    <span>
                      Our <br />
                    </span>
                    <span>Clients</span>
                  </div> */}
                  <h2>The Village Pizzaria</h2>
                  <div className={style.tagpart}>
                    <p>Design</p>
                  </div>
                </div>
                <div>
                  <Image src={img3}></Image>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Our_Clients;
