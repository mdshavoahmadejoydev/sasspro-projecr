import React from 'react'

import { MdKeyboardArrowRight } from "react-icons/md";
import Img from './Img'


const Workwithcard = ({src, title, des,}) => {
  return (
    <div>
      <div className="w-362 flex justify-center flex-col shadow-2xl px-31">
        <Img
          src={src}
          alt={`img`}
          className={`w-65 h-106 pt-10`}
        />
        <div className="pb-35 pt-25">
          <p className="font-raleway font-bold text-22 text-seagreen mb-25">
            {title}
          </p>
          <p className="font-roboto font-normal text-base text-olive mb-7">
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