import React from "react";

export const DiscountCard = ({
  name,
  title,
  dec,
  icon: Icon,
  comment1,
  comment2,
  comment3,
  comment4,
  button,
  img,
}) => {
  return (
    <div className="flex items-center gap-12">
      <div className="max-w-[500px] w-[100%] " >
        <h3 className="text-[35px] font-semibold text-navyBlue mb-4" >{name}</h3>
        <h4 className="text-[21px] font-normal text-pink mb-5">{title}</h4>
        <p className="text-[17px] font-normal text-textColor leading-[30px] mb-7">{dec}</p>
        <div className="flex items-center gap-[30px]">
          <div >
            <div className="flex items-center gap-[7px]">
              <Icon />
              <p className=" text-4 font-normal text-[#B8B8DC] mb-[10px]">{comment1}</p>
            </div>
            <div className="flex items-center gap-[7px]">
              <Icon />
              <p className=" text-4 font-normal text-[#B8B8DC] mb-[10px]">{comment2}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[7px]">
              <Icon />
              <p className=" text-4 font-normal text-[#B8B8DC] mb-[10px]">{comment3}</p>
            </div>
            <div className="flex items-center gap-[7px]">
              <Icon />
              <p className=" text-4 font-normal text-[#B8B8DC] mb-[10px]">{comment4}</p>
            </div>
          </div>
        </div>
          <button className="py-[20px] px-[48px]  mt-[37px] text-white bg-pink text-4 font-normal " >{button}</button>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
