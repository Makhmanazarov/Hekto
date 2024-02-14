import React from "react";

export const LatestMainItem = ({
  img,
  icon1: Icon1,
  icon2: Icon2,
  title,
  text,
  link,
  name,
  date,
}) => {
  return (
    <div className="group max-w-[370px] w-[100%] rounded-[5px] shadow-lg">
      <div>
        <img src={img} alt="img" />
      </div>
      <div className=" pt-5 pr-[50px]  pb-[35px] pl-5">
        <div className="flex items-center gap-[30px] mb-8">
          <div className="flex items-center gap-2">
            <Icon1 />
            <p>{name}</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon2 />
            <p>{date}</p>
          </div>
        </div>
        <h3 className="text-[18px] font-bold text-navyBlue mb-[17px]  group-hover:text-pink" >{title}</h3>
        <p className="text-[16px] font-normal text-textColor leading-[30px] mb-[14px]" >{text}</p>
        <a className="text-4 font-normal text-navyBlue group-hover:text-pink underline" href="#">{link}</a>
      </div>
    </div>
  );
};
