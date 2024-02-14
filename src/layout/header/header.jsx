import React from "react";
import { header } from "../../data/layout-data"
import { EmailIcon } from "../../assets/icons/email";
import { Phone } from "../../assets/icons/phone";
import { User } from "../../assets/icons/user";
import { Heart } from "../../assets/icons/heart";
import { Bucket } from "../../assets/icons/bucket";
import { Logo } from "../../assets/icons/logo";
import { SearchIcon } from "../../assets/icons/searchIcon";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className=" bg-purple pt-3  pb-[15px] ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <div className=" flex items-center gap-3">
                <EmailIcon />
                <p className=" text-4 font-semibold text-white  ">
                  mhhasanul@gmail.com
                </p>
              </div>
              <div className=" flex items-center gap-3">
                <Phone />
                <p className="text-4 font-semibold text-white">(12345)67890</p>
              </div>
            </div>
            <div className=" flex items-center gap-[25px]">
              <div className="flex items-center gap-[10px]">
                <select className=" bg-transparent text-4 font-semibold text-white outline-none ">
                  <option
                    className="text-4 font-semibold text-purple"
                    value="English"
                  >
                    English
                  </option>
                  <option
                    className="text-4 font-semibold text-purple"
                    value="Russian"
                  >
                    Russian
                  </option>
                  <option
                    className="text-4 font-semibold text-purple"
                    value="Uzbek"
                  >
                    Uzbek
                  </option>
                </select>
                <select className="bg-transparent text-4 font-semibold text-white outline-none ">
                  <option
                    className="text-4 font-semibold text-purple"
                    value="USD"
                  >
                    USD
                  </option>
                  <option
                    className="text-4 font-semibold text-purple"
                    value="RUB"
                  >
                    RUB
                  </option>
                  <option
                    className="text-4 font-semibold text-purple"
                    value="UZS"
                  >
                    UZS
                  </option>
                </select>
                <button
                  className="text-4 font-semibold text-white flex items-center "
                  type="button"
                >
                  Login <User />{" "}
                </button>
                <button
                  className="text-4 font-semibold text-white flex items-center gap-1"
                  type="button"
                >
                  Wishlist <Heart />{" "}
                </button>
              </div>
              <button type="button">
                <Bucket />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[22px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[88px]">
              <a href="#">
                <Logo />
              </a>
              <ul className="flex items-center gap-[35px]">
                {header.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      className=" text-4 font-normal text-navyBlue hover:text-pink "
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" relative  w-[320px]">
              <input
                className=" w-[100%] px-[20px] outline-none h-10  border-solid border-[2px] border-whiteGray "
                type="text"
              />
              <button className=" w-[50px] h-10 bg-pink flex items-center justify-center absolute top-0 right-0 ">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
