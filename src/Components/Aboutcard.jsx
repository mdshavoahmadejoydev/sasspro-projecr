import React from "react";

import Img from '../Components/Img';
import Flex from '../Components/Flex';

const Aboutcard = ({src, title, des}) => {
  return (
    <>
      <Flex className={`items-center`}>
        <Img src={src} alt="img" className={`w-[40px] h-[40px] lg:w-75 lg:h-75`} />
        <div className="ml-2 lg:ml-4">
          <p className="font-inter font-bold text-xl lg:text-3xl text-primary mb-1 lg:mb-2.5">
            {title}
          </p>
          <p className="text-olive text-xs lg:text-base font-raleway font-semibold">
            {des}
          </p>
        </div>
      </Flex>
    </>
  );
};

export default Aboutcard;
