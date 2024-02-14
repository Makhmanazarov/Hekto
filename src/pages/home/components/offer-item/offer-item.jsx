import React from 'react'

export const OfferItem = ({img: Icon, title, dec}) => {
  return (
    <div className='max-w-[270px] w-[100%] text-center pt-[67px] pr-[26px] pb-[46px] pl-[27px]  shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] ' >
        <div className='flex items-center justify-center mb-[38px]' >
           <Icon/>
        </div>
        <h3 className='text-[22px] font-bold  text-navyBlue mb-5' >{title}</h3>
        <p className=' text-4 font-bold text-textColor leading-6 '> {dec}</p>
    </div>
  )
}
