import Image from "next/image";
import React from "react";
import QuoteIcon from "../../../assets/image/landingPage/quote.svg";
import PinkQuoteIcon from "../../../assets/image/landingPage/pink_quote.svg";
import GreenQuoteIcon from "../../../assets/image/landingPage/green_quote.svg";
import GreenStar from "../../../assets/image/landingPage/big_green_star.svg";
import BlueStar from "../../../assets/image/landingPage/big_blue_star.svg";
import PinkStar from "../../../assets/image/landingPage/big_pink_star.svg";

import {
  testimonial_container,
  quote_star,
  quote_container,
  quote_content_container,
  quote,
  quote_author,
  quote_author_title,
  quote_icon,
} from "./index.module.css";

const Testimonial = ({ color, quoteText, quoteAuthor, authorTitle }) => {
  let quote_icon_color;
  let star_icon_color;

  if (color === "green") {
    quote_icon_color = GreenQuoteIcon;
    star_icon_color = GreenStar;
  } else if (color === "pink") {
    quote_icon_color = PinkQuoteIcon;
    star_icon_color = PinkStar;
  } else {
    quote_icon_color = QuoteIcon;
    star_icon_color = BlueStar;
  }

  return (
    <div className={testimonial_container}>
      <div className={quote_container}>
        <Image src={quote_icon_color} className={quote_icon} />

        <div className={quote_content_container}>
          <Image className={quote_star} src={star_icon_color} />
          <p className={quote}>“{quoteText}”</p>
          <p className={quote_author}>{quoteAuthor}</p>
          <p className={quote_author_title}>{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
