import React from "react";
import { products } from "../../../../data/product-sec2";
import { Card } from "../Card/card";

export const ProductsSec2 = () => {
  const [state, setState] = React.useState(products[0].All);
  const names = Object.keys(products[0]);
  const [name, setName] = React.useState(names[0]);
  const changeTab = (slug) => {
    setState(products[0][slug]);
    setName(slug);
  };
  return (
    <section>
      <div className="container">
        <h2 className="text-[42px] font-bold  text-navyBlue text-center mb-5">
          Leatest Products
        </h2>
        <div className=" flex items-center justify-center gap-[58px] mb-[58px]">
          {names.map((item) => (
            <button
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
        <div className="flex items-start justify-between flex-wrap gap-y-[120px]">
          {state.map((item) => (
            <Card
              key={item.id}
              name={item.title}
              img={item.img}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
