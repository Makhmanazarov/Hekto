import React from "react";
import { categories } from "../../data/footer-data"
import { customerCare } from "../../data/footer-data"
import { pages } from "../../data/footer-data"
import { Logo } from "../../assets/icons/logo";
import { Social } from "../../assets/icons/social";

export const Footer = () => {
  return (
    <footer className="" >
      <div className=" bg-skyBlue  pt-[95px] pb-[101px]">
        <div className="container">
          <div className="flex items-start  justify-between " >
            <div>
              <div className="mb-[31px]">
              <a  href="#">
                <Logo />
              </a>

              </div>
              <div className="relative max-w-[380px] mb-6 " >
                <input className="bg-white pt-[14px] outline-none  pb-[11px] px-5 w-[100%] rounded-[3px] " placeholder="Enter Email Address" type="email" />
                <button className=" py-[10px] px-10 bg-pink text-white rounded-[3px] absolute top-[2.5px] right-[2.5px] " type="button">Sign Up</button>
              </div>
              <p className="text-4 font-semibold  text-textColor mb-[6px]">Contact Info</p>
              <p  className="text-4 font-semibold  text-textColor">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
              <p className="text-[22px] font-semibold text-black mb-[42px] ">Catagories</p>
              {categories.map((item) => (
                <p  key={item.id} className="text-4 font-medium  text-textColor mb-[21px]" >{item.name}</p>
              ))}
            </div>
            <div>
              <p className="text-[22px] font-semibold text-black mb-[42px] ">Customer Care</p>
              {customerCare.map((item) => (
                <p key={item.id} className="text-4 font-medium  text-textColor mb-[21px]">{item.name}</p>
              ))}
            </div>
            <div>
              <p className="text-[22px] font-semibold text-black mb-[42px] ">Pages</p>
              {pages.map((item) => (
                <p key={item.id} className="text-4 font-medium  text-textColor mb-[21px]">{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[17px]  bg-whiteBlue" >
        <div className="container">
          <div className="flex items-center justify-between" >
            <p className=" text-4 font-semibold text-textColor">©Webecy - All Rights Reserved</p>
            <a href="#">
              <Social/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
