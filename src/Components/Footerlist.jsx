import React from 'react'
import Ptag from './Ptag'

const Footerlist = ({title, list1, list2, list3, list4}) => {
  return (
    <div>
      <p className='font-raleway text-white font-semibold text-xl'>{title}</p>
      <ul className='mt-26 flex flex-col gap-4 cursor-pointer'>
        <li className='font-roboto font-normal text-base text-offwhite'>{list1}</li>
        <li className='font-roboto font-normal text-base text-offwhite'>{list2}</li>
        <li className='font-roboto font-normal text-base text-offwhite'>{list3}</li>
        <li className='font-roboto font-normal text-base text-offwhite'>{list4}</li>
      </ul>
    </div>
  )
}

export default Footerlist