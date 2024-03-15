"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Overview = () => {
  const params = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <PaddingContainer className="my-24">
      <div className="text-amber-500 text-5xl font-bold text-center uppercase leading-[76px]">
        OVERVIEW
      </div>
      <Slider {...params}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </PaddingContainer>
  );
};

export default Overview;
