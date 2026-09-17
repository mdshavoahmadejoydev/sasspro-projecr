import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";


import Img from '../Components/Img'
import Flex from '../Components/Flex'

const Indistrycard = ({src, title, des, showimg, proimg, proname}) => {
  return (
    <div>
      <div className="w-[90%] mx-auto md:w-366 lg:w-366 flex justify-center flex-col shadow-2xl bg-offwhite rounded-lg">
        <Img src={src} alt={`img`} className={`w-[95%] max-h-361 h-auto sm:max-h-433 sm:min-h-220 sm:h-auto h-220 m-auto pt-2.5`} />
        <div className="px-31 pb-5 lg:pb-31 pt-3.5 lg:pt-31">
          <p className="font-raleway font-bold text-lg lg:text-22 text-seagreen mb-2 lg:mb-5 truncate">
            {title}
          </p>

          {showimg && (
            <Flex className={`flex-col sm:flex-row md:flex-col lg:flex-row gap-2 lg:gap-0 lg:items-center sm:justify-between lg:justify-between my-25`}>
              <Flex className={`items-center`}>
                <div className="w-30 h-30 mr-11">
                  <img src={proimg} alt="img" className="w-full h-full"></img>
                </div>
                <p className="w-148 font-sm text-seagreen font-roboto font-bold truncate">
                  {proname}
                </p>
              </Flex>

              <Flex className={`items-center gap-2 ml-25`}>
                <FaCalendarAlt className="text-seagreen/50"/>

                <input
                  type="date"
                  className="!bg-transparent outline-none border-none font-roboto font-semibold text-seagreen/50 [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </Flex>
            </Flex>
          )}

          <p className="font-roboto w-auto font-normal text-sm lg:text-base text-olive mb-2 lg:mb-6 line-clamp-2">
            {des}
          </p>
          <p className="font-roboto font-semibold text-sm lg:text-base text-primary">
            Sea More
            <MdKeyboardArrowRight className="text-2xl  font-bold text-primary inline-block" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Indistrycard;
