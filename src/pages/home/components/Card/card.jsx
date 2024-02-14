import React from "react";
import { ItemSale } from "../../../../assets/icons/item-sale";
import { BlueHeart } from "../../../../assets/icons/blueheart";
import { BlueBucket } from "../../../../assets/icons/blueBucket";
import { BlueSearch } from "../../../../assets/icons/blueSearch";

export const Card = ({ name, img, price, oldPrice }) => {
  return (
    <div className=" max-w-[360px] w-[100%] group">
      <div className=" relative flex items-center justify-center h-[267px] bg-snow group-hover:bg-transparent">
        <div className="  hidden absolute left-[18px] top-[10px] z-[10] group-hover:block" ><ItemSale/></div>
        <div className="hidden group-hover:block ">
        <div className="  flex flex-col gap-y-[10px] absolute bottom-[10px] left-[20px]">
            <div className=" w-[30px] h-[30px] rounded-[50%] flex items-center justify-center hover:bg-[#EEEFFB]" >
            <BlueBucket/>
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center hover:bg-[#EEEFFB]">
            <BlueHeart/>
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center hover:bg-[#EEEFFB]">
            <BlueSearch/>
            </div>
        </div>
        </div>
        <img className=" p-[50px] w-[100%] transition-all duration-500 object-cover group-hover:scale-[.8]" src={img} alt="img" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-4 font-bold text-navyBlue  border-b-2 border-b-[#EEEFFB]">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-4 font-bold text-navyBlue">{price}</p>
          <p className="text-3  font-normal text-red line-through">
            {oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
