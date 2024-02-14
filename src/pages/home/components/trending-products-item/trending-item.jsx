import React from 'react'

export const TrendingItem = ({img, title, price, oldPrice}) => {
  return (
    <div  className='max-w-[270px] w-[100%] h-[350px] pt-3 pr-3 pb-8 pl-3  shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)]  group' >
        <div className='p-[30px] w-[247px] h-[244px] bg-[#F5F6F8]' >
            <img className='  transition-all duration-500 object-cover group-hover:scale-[.8]  w-[100%] h-[100%]' src={img} alt="img" />
        </div>
        <h3 className='text-4  font-extrabold text-navyBlue mt-[15px] text-center' >{title}</h3>
        <div className='flex items-center justify-center gap-3'>
            <p className='text-[16px] font-semibold text-navyBlue' > {price}</p>
            <p className='text-3 font-normal text-textColor'>{oldPrice}</p>
        </div>
    </div>
  )
}
