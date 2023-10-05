import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay  extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      
    };
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <h2> Single Item</h2>
        <Slider {...settings} className="max-sm:w-full w-[30rem] text-[2rem] text-white duration-0 ">
          <div className="flex justify-center items-center h-[20rem] w-[60rem]">
            <div className="h-full w-[30rem] bg-black mx-auto flex justify-center items-center">
                1
            </div>
          </div>
          <div className="flex justify-center items-center h-[20rem] w-[60rem]">
            <div className="h-full w-[30rem] bg-black mx-auto flex justify-center items-center">
               2 
            </div>
          </div>
          <div className="flex justify-center items-center h-[20rem] w-[60rem]">
            <div className="h-full w-[30rem] bg-black mx-auto flex justify-center items-center">
                3
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}