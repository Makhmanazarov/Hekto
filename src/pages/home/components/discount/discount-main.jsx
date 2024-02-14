import React from "react";
import { discountData } from "../../../../data/discount-data";
import { DiscountCard } from "../discount-card/discountCard";

export const DiscountMain = () => {
  const [state, setState] = React.useState(discountData[0]["Wood Chair"]);
  const names = Object.keys(discountData[0]);
  const [name, setName] = React.useState(names[0]);
  const changeTab = (slug) => {
    setState(discountData[0][slug]);
    setName(slug);
  };
  return (
    <section className="pb-20">
      <div className="container">
        <div>
          <h2 className="text-[42px] font-bold text-navyBlue mb-[33px] text-center"> Discount Item</h2>
          <div className="flex items-center gap-[30px] justify-center mb-[60px]" >
            {names.map((item) => (
              <button className="text-[20px] font-normal text-navyBlue"
                style={
                  name == item
                    ? { color: "pink", textDecoration: "underline" }
                    : {}
                }
                onClick={() => changeTab(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            {state.map((item) => (
              <DiscountCard
                key={item.id}
                name={item.name}
                title={item.title}
                dec={item.dec}
                icon={item.icon}
                comment1={item.comment1}
                comment2={item.comment2}
                comment3={item.comment3}
                comment4={item.comment4}
                button={item.button}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
