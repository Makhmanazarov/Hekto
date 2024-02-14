import React from "react";
import {
  trendingData,
  trendingData2,
  trendingData3,
} from "../../../../data/trending-products-data";
import { TrendingItem } from "../trending-products-item/trending-item";
import { TrendingItem2 } from "../trending-products-item/trending-item2";
import { TrendingMiniItem } from "../trending-mini-item/trending-mini-item";

export const TrendingMain = () => {
  return (
    <section className="pt-[132px] pb-[126px]">
      <div className="container">
        <div>
          <h2 className="text-[42px] font-bold text-navyBlue mb-10 text-center">
            Trending Products
          </h2>
          <div className="flex items-start justify-between ">
            {trendingData.map((item) => (
              <div key={item.id}>
                <TrendingItem
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              </div>
            ))}
          </div>
          <div className=" flex items-start justify-between">
            <div className="flex items-start gap-[15px] mt-10">
              {trendingData2.map((item) => (
                <div key={item.id}>
                  <TrendingItem2
                    title={item.title}
                    link={item.link}
                    img={item.img}
                  />
                </div>
              ))}
            </div>
            <div className="mt-10">
              {trendingData3.map((item) => (
                <div key={item.id}>
                  <TrendingMiniItem
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
