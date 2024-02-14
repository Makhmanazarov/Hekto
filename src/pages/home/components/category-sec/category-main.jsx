import React from "react";
import { categoryData } from "../../../../data/category-data";
import { CategoryCard } from "../category-card/categoryCard";
import { SlideIcons } from "../../../../assets/icons/slide-icons";

export const CategoryMain = () => {
  return (
    <section className="pb-[125px]">
      <div className="container">
        <h2 className="text-[42px]  font-bold text-navyBlue mb-[56px] text-center">
          Top Categories
        </h2>
        <div className="flex items-start justify-between mb-[40px]">
          {categoryData.map((item) => (
            <CategoryCard
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <SlideIcons />
        </div>
      </div>
    </section>
  );
};
