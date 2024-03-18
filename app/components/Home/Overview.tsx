"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OverViewCard from "../common/Cards/OverViewCard";
import { TOverviewData } from "./types";

const overViewData: TOverviewData[] = [
  {
    id: 1,
    image: "/assets/overview/s1.jpeg",
    title: "Industry",
    subtitle: "Investments in Hard Tech innovation for climate change",
    link: "https://www.google.com/",
  },
  {
    id: 2,
    image: "/assets/overview/s2.jpeg",
    title: "Stages",
    subtitle: "Pre-Seed to Early Stage",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    image: "/assets/overview/s3.jpeg",
    title: "Check Size",
    subtitle: "€250K - €2M",
    link: "https://www.google.com/",
  },
  {
    id: 4,
    image: "/assets/overview/s4.jpeg",
    title: "Geography",
    subtitle: "USA & Portugal",
    link: "https://www.google.com/",
  },
];

const Overview = () => {
  const params = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-20 overflow-hidden lg:my-24 lg:mx-24">
      {/* Title Text  */}
      <div className="text-dipalo lg:text-5xl text-5xl font-bold text-center uppercase leading-[76px]">
        OVERVIEW
      </div>
      <Slider {...params} className="my-5 lg:mt-10">
        {overViewData.map((data) => (
          <div className="py-2 overflow-hidden rounded-md " key={data.id}>
            <OverViewCard
              image={data.image}
              title={data.title}
              subtitle={data.subtitle}
              link={data.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Overview;
