import React from "react";
import img from "../../../../assets/img/about-us-img.png";

export const AboutUs = () => {
  return (
    <section className="pt-[30px] pb-[60px] bg-[#F1F0FF]">
      <div className="container">
        <div className="flex items-center justify-center" >
          <div>
            <img  src={img} alt="img" />
          </div>
          <div className="max-w-[480px] w-[100%] ">
            <h2 className="text-[35px]  font-extrabold text-navyBlue leading-[132%] mb-[20px]">
              Unique Features Of leatest & Trending Poducts
            </h2>
            <div className="flex items-center gap-3 mb-[13px]" >
              <span className=" block w-[11px] h-[11px] bg-pink rounded-[50%]"></span>
              <p className=" text-4 font-medium text-textColor ">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex items-start gap-3 mb-[13px]" >
              <span className=" mt-[7px] block w-[15px] h-[11px] bg-blue rounded-[50%]"></span>
              <p className=" text-4 font-medium text-textColor ">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            <div className="flex items-center gap-3 mb-[20px]">
              <span className=" block w-[11px] h-[11px] bg-[#2BF5CC] rounded-[50%]"></span>
              <p className=" text-4 font-medium text-textColor ">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
            <div className="flex items-start gap-4">
              <button className="py-[12px] px-[28px] bg-pink text-white text-[17px] font-semibold  rounded-[2px]">
                Add To Cart
              </button>
              <div>
                <p className="text-[14px] font-bold text-navyBlue mb-[3px] " >B&B Italian Sofa </p>
                <p className="text-[14px] font-normal text-navyBlue" >$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
