import React from "react";
import { offer } from "../../../../data/offer-data";
import { OfferItem } from "../offer-item/offer-item";

export const Offer = () => {
  return (
    <section className="pt-[60px] pb-[135px]">
      <div className="container">
        <div>
          <h2 className="text-[42px] font-bold text-navyBlue text-center mb-[55px]">
            What Shopex Offer!
          </h2>
          <div className="flex items-start justify-between">
            {offer.map((item) => (
              <div key={item.id}>
                <OfferItem img={item.img} title={item.title} dec={item.dec} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
