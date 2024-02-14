import React from "react";
import { products } from "../../../../data/product-sec1";
import { ItemIcon } from "../../../../assets/icons/item-icon";
import { SlideIcon } from "../../../../assets/icons/slide-icon";

export const ProductsSec = () => {
  return (
    <section className="py-[129px]">
      <div className="container">
        <h1 className=" text-[42px] font-bold text-navyBlue text-center mb-12">
          Featured Products
        </h1>
        <div className="flex items-start justify-between">
          {products.map((item) => (
            <div className="w-[270px] text-center shadow-md " key={item.id}>
              <div className=" w-[270px] h-[236px]  relative  bg-itemColor">
                <img
                  className=" absolute  left-[45px] top-[50px]"
                  src={item.img}
                  alt="img"
                />
              </div>
              <div className=" hover:bg-blue py-3" >
                <h2 className="text-[18px] font-bold  text-pink text-center  hover:text-white">
                  {item.name}
                </h2>
                <button className="text-center" type="button">
                  <ItemIcon />
                </button>
                <p className="text-[14px] font-normal text-navyBlue mb-3 hover:text-white ">
                  {item.dec}
                </p>
                <strong className="text-[14px] font-normal text-navyBlue pb-[17px] hover:text-white">
                  ${item.price}.00
                </strong>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[53px] flex justify-center" ><SlideIcon/></div>
      </div>
    </section>
  );
};
