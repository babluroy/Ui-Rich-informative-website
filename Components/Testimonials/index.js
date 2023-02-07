import React from "react";
import { testimonials_container, testimonials_heading } from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import Testimonial from "./Testimonial";

const testimonialData = [
  {
    id: "01",
    color: "green",
    quoteText:
      "I recently worked with UI-RICH on the development of my company's website, and I couldn't be more impressed with the outcome. From start to finish, the team was professional, knowledgeable, and responsive to all of my needs.",
    quoteAuthor: "Maish Kapoor",
    authorTitle: "Founder at RA",
  },

  {
    id: "02",
    color: "pink",
    quoteText:
      "UI-RICH helped us design the user interface for our new mobile app and I couldn't be happier with the results. They were professional, timely, and most importantly, produced designs that exceeded our expectations.",
    quoteAuthor: "Ruchi Singha",
    authorTitle: "Co-Founder at TechSol",
  },

  {
    id: "03",
    color: "blue",
    quoteText:
      "The app that UI-RICH made for us went way beyond what I had in mind. They gave me new ideas and worked hard for me the whole time. Their creative ideas and new ways of doing things made my app a lot better.",
    quoteAuthor: "Raghav Agarwal",
    authorTitle: "Founder at LegalTrust",
  },
];

const Testimonials = () => {
  return (
    <div className="container">
      <div className={testimonials_container}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimonial
              color={testimonialData[0].color}
              quoteText={testimonialData[0].quoteText}
              quoteAuthor={testimonialData[0].quoteAuthor}
              authorTitle={testimonialData[0].authorTitle}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              color={testimonialData[1].color}
              quoteText={testimonialData[1].quoteText}
              quoteAuthor={testimonialData[1].quoteAuthor}
              authorTitle={testimonialData[1].authorTitle}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              color={testimonialData[2].color}
              quoteText={testimonialData[2].quoteText}
              quoteAuthor={testimonialData[2].quoteAuthor}
              authorTitle={testimonialData[2].authorTitle}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
