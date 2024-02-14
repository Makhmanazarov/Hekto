import React from "react";
import img from "../../../../assets/img/news-bg.png"

export const News = () => {
  return (
    <section className="bg-cover bg-center pt-[174px] pb-[103px]" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
          <h2 className=" text-[35px] font-bold text-navyBlue leading-[155%] max-w-[550px] w-[100%] text-center  ml-[auto] mr-[auto] mb-[35px]">Get Leatest Update By Subscribe 0ur Newslater</h2>
          <button className="py-[16px] px-[34px] bg-pink rounded-[2px] text-4 font-normal text-white block text-center ml-[auto] mr-[auto] " type="button">Shop Now</button>
      </div>
    </section>
  );
};
