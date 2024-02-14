import React from 'react'

export const TrendingMiniItem = ({img, title, price}) => {
  return (
    <div className='flex items-center gap-2 mb-5'>
        <div className=' w-[107px] h-[74px]  flex items-center justify-center bg-[#F5F6F8]'>
            <img src={img} alt="" />
        </div>
        <div>
            <h3 className=' text-4 font-semibold text-navyBlue mb-[2px]'>{title}</h3>
            <p className=' text-3 font-normal text-navyBlue'>{price}</p>
        </div>
    </div>
  )
}
