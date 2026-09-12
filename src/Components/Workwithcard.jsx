import React from 'react'

import { MdKeyboardArrowRight } from "react-icons/md";
import Img from './Img'


const Workwithcard = ({src, title, des,}) => {
  return (
    <div>
      <div className="w-340 lg:w-362 flex justify-center flex-col shadow-2xl px-31">
        <Img
          src={src}
          alt={`img`}
          className={`mx-auto lg:mx-0 w-[48px] lg:w-65 lg:h-106 pt-4 lg:pt-10`}
        />
        <div className="text-center lg:text-start pb-4 lg:pb-35 pt-4 lg:pt-25">
          <p className="font-raleway font-bold text-22 text-seagreen mb-2 lg:mb-25">
            {title}
          </p>
          <p className="font-roboto font-normal text-base text-olive mb-2 lg:mb-7">
            {des}
          </p>
          <p className="font-roboto font-semibold text-base text-primary">
            Sea More
            <MdKeyboardArrowRight className="text-2xl  font-bold text-primary inline-block" />{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Workwithcard