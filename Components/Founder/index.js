import Image from "next/image";
import React from "react";
import founderImage from "../../assets/image/Founder/founder_image.png";
import style from "./index.module.css";
import img1 from "../../assets/image/Founder/LinkedIn.png";
import img2 from "../../assets/image/Founder/instagram.png";
import img3 from "../../assets/image/Founder/mail.png";

const Founder = () => {
  return (
    <div className="container">
      <section className={style.founderPart}>
        <div className={style.textpart}>
          <h3 className={style.header_text}>Meet the</h3>
          <h3 className={style.header_text}>Founder</h3>
          <p className={style.header_details}>
            <span className="fw-bold">Sahgal Yadav,</span> Founder, of AlphaRule Creatives and
            Lesspay.
          </p>
        </div>
        <div className={style.middlepart}>
          <p className={style.middletext}>
            "Wonder what your customer really wants? Think like a customer. First Experience the
            problem then find it's solution and make lives easier."
          </p>
          <div className={style.mediaimg}>
            <a
              href="https://www.linkedin.com/in/sahgal-yadav-954a64169/"
              target="_blank"
              rel="noreferrer"
            >
              <Image className={style.linkedin} src={img1}></Image>
            </a>
            <a href="https://www.instagram.com/sahgal_yadav/" target="_blank" rel="noreferrer">
              <Image src={img2}></Image>
            </a>
            <a href="mailto:Sahgal@gastos.in">
              <Image src={img3}></Image>
            </a>
          </div>
        </div>
        <div className={style.founder_img_part}>
          <Image src={founderImage}></Image>
        </div>
      </section>
    </div>
  );
};

export default Founder;
