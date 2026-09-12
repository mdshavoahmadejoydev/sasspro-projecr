import React from "react";
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import Pricingcarditem from '../Components/Pricingcarditem'

const Pricingcard = ({packagename, price, duration, btntext}) => {
  return (
    <div className="bg-lightgray rounded-xl pt-50 px-31 pb-44 w-340 lg:w-366">
      <p className="font-raleway text-22 font-bold text-seagreen pb-11">
        {packagename}
      </p>
      <strong className="font-inter font-bold text-5xl text-seagreen">
        ${price}{" "}
      </strong>{" "}
      <span className="font-roboto text-base font-semibold">/ {duration}</span>
      <div className="border-2 border-b-olive/20 mt-35 mb-35"></div>
      <Flex className={`flex-col gap-27`}>
        <Pricingcarditem text={`Access to editing all blocks`} />
        <Pricingcarditem text={`Editing blocks together`} />
        <Pricingcarditem text={`Access to all premium icons`} />
        <Pricingcarditem text={`A dedicated domain`} />
      </Flex>
      <Button content={btntext} hover={true} border={true} className={`mt-35`} />
    </div>
  );
};

export default Pricingcard;
