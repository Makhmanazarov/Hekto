import React from "react";

export const CategoryCard = ({ img, title, price }) => {
  return (
    <div className="max-w-[270px] w-[100%] group ">
      <div
        className=" relative  mb-[27px] w-[270px] h-[270px] shadow-[0px_12px_40px_0px_rgba(49,32,138,0.1)]
       bg-[rgb(246,247,251)] flex items-center justify-center rounded-[50%]
        group-hover:shadow-[12px_14px_2px_-8px_rgba(11,50,209,0.55)] group-hover:transition-all duration-500  "
      >
        <img
          className="transition-all duration-500 object-cover group-hover:scale-[.8]"
          src={img}
          alt="img"
        />
        <button className="  absolute hidden group-hover:block bottom-[21px] text-white text-3 font-medium py-[6px] px-[16px] rounded-[2px] bg-[#08D15F]">
          View Shop
        </button>
      </div>
      <h3 className="text-[20px] mb-[5px] text-center font-normal text-navyBlue">{title}</h3>
      <p className="text-4 font-normal text-navyBlue text-center">{price}</p>
    </div>
  );
};
