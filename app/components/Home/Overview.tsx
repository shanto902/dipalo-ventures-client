"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../common/Card";

const Overview = () => {
  const params = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="my-24 mx-24">
      <div className="text-amber-500 text-5xl font-bold text-center uppercase leading-[76px]">
        OVERVIEW
      </div>
      <Slider {...params}>
        <div>
          <Card
            img="/assets/s1.jpeg"
            heading="Industry"
            subheading="Investments in Hard Tech innovation for climate change"
            link="https://www.google.com/"
          />
        </div>
        <div>
          <Card
            img="/assets/s2.jpeg"
            heading="Stages"
            subheading="Pre-Seed to Early Stage"
            link="https://www.google.com/"
          />
        </div>
        <div>
          <Card
            img="/assets/s3.jpeg"
            heading="Check Size"
            subheading="€250K - €2M"
            link="https://www.google.com/"
          />
        </div>
        <div>
          <Card
            img="/assets/s4.jpeg"
            heading="Geography"
            subheading="USA & Portugal"
            link="https://www.google.com/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Overview;
