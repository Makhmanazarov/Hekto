import React from "react";
import { latestData } from "../../data/latest-sec-data";
import { LatestMainItem } from "../home/components/latest-sec-item/latest-main-item";
import img from "../../assets/img/latest-sec-img.png"

export const LatestMain = () => {
  return (
    <section className="pt-[96px] pb-[115px]" >
      <div className="container">
        <div  className="flex items-center justify-center mb-[96px]" >
            <img src={img} alt="" />
        </div>

        <h2 className="text-[42px] font-bold text-navyBlue text-center mb-[80px]" >Leatest Blog</h2>

        <div className="flex items-start justify-between" >
          {latestData.map((item) => (
            <LatestMainItem
              key={item.id}
              img={item.img}
              icon1={item.icon1}
              icon2={item.icon2}
              title={item.title}
              text={item.text}
              link={item.link}
              name={item.name}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
