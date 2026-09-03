import React from "react";

import Img from '../Components/Img';
import Flex from '../Components/Flex';

const Aboutcard = ({src, title, des}) => {
  return (
    <>
      <Flex>
        <Img src={src} alt="img" className={`w-75 h-75`} />
        <div className="ml-4">
          <p className="font-inter font-bold text-3xl text-primary mb-2.5">
            {title}
          </p>
          <p className="text-olive text-base font-raleway font-semibold">
            {des}
          </p>
        </div>
      </Flex>
    </>
  );
};

export default Aboutcard;
