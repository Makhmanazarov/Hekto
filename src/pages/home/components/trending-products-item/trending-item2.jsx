import React from 'react'

export const TrendingItem2 = ({img, title, link}) => {
  return (
    <div className='w-[420px] relative h-[270px] pt-[34px] pr-[126px] pb-[180px] pl-[25px]  bg-[#FFF6FB] hover:bg-[#EEEFFB]' >
        <h3 className='text-[26px] font-semibold text-navyBlue mb-3' >{title}</h3>
        <a className='text-4 font-semibold text-pink underline' href="#">{link}</a>
        <img  className=' absolute right-0 bottom-0' src={img} alt="" />
    </div>
  )
}
