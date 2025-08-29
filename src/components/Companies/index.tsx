"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  image: string;
}

const data: Data[] = [
  {
    image: "/images/brands/logadex.png",
  },
  {
    image: "/images/brands/adafalabella.png",
  },
  {
    image: "/images/brands/utb.png",
  },
  {
    image: "/images/brands/ballivian.png",
  },
  {
    image: "/images/brands/tradecruz.jpg",
  },
  {
    image: "/images/brands/jetstart.png",
  },
  {
    image: "/images/brands/vilaseca.png",
  },
  {
    image: "/images/brands/maex.png",
  },
  {
    image: "/images/brands/villatron.png",
  },
    {
    image: "/images/brands/agda.png",
  },
  {
    image: "/images/brands/ureal.png",
  },
  {
    image: "/images/brands/camex.png",
  },
  {
    image: "/images/brands/gaciel.png",
  },
  {
    image: "/images/brands/joyeria.png",
  },
    {
    image: "/images/brands/gamarra.png",
  },
  {
    image: "/images/brands/bruseco.png",
  },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };

    return (

      <div className='text-center bg-lightpink' >
        <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <Slider {...settings}>
              {data.map((item, i) =>
                <div key={i}>
                  <img src={item.image} alt={item.image} />
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>

    )
  }
}