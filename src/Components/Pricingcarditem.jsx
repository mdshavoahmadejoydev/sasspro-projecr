import React from "react";
import Ptag from '../Components/Ptag'
import Flex from '../Components/Flex'
import { ImCheckmark } from "react-icons/im";

const Pricingcarditem = ({text}) => {
  return (
    <Flex className={`gap-4 items-center`}>
      <ImCheckmark className="text-primary" />
      <Ptag
        content={text}
        className={`!text-olive`}
      />
    </Flex>
  );
};

export default Pricingcarditem;
