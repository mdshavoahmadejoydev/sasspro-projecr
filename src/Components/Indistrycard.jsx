import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

import Img from '../Components/Img'

const Indistrycard = ({src, title, des,}) => {
  return (
    <div>
      <div className="w-366 flex justify-center flex-col shadow-2xl">
        <Img
          src={src}
          alt={`img`}
          className={`w-346 h-220 m-auto pt-2.5`}
        />
        <div className="px-31 pb-31 pt-31">
          <p className="font-raleway font-bold text-22 text-seagreen mb-5">
            {title}
          </p>
          <p className="font-roboto font-normal text-base text-olive mb-6">
            {des}
          </p>
          <p className="font-roboto font-semibold text-base text-primary">
            Sea More
            <MdKeyboardArrowRight className="text-2xl  font-bold text-primary inline-block" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Indistrycard;
