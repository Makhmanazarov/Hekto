import React from "react";
import img from "../../../../assets/img/hero-bg.png";
import img2 from "../../../../assets/img/hero-img.png";

export const Hero = () => {
  return (
    <section className=" pt-[203px] pb-[236px] relative bg-skyBlue">
      <div className="container">
        <div className=" absolute top-0 left-[-50px] w-[300px] h-[280px]">
          <img src={img} alt="img" />
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-[644px]">
            <p className=" text-4 font-semibold text-pink mb-3">
              Best Furniture For Your Castle....
            </p>
            <h1 className=" text-[53px] font-bold text-black tracking-[1.5%] mb-[12px]">
              New Furniture Collection Trends in 2020
            </h1>
            <p className=" text-4  font-semibold text-textColor mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button
              className=" py-4 px-10 bg-pink text-white text-[17px] font-semibold rounded-[2px] "
              type="button"
            >
              Shop Now
            </button>
          </div>
          <div className=" absolute right-0 w-[609px] h-[589px]">
            <img src={img2} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
