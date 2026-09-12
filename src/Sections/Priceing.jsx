import React, { useState } from 'react'
import Title from '../Components/Title'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import { BsJustify } from 'react-icons/bs'
import Ptag from '../Components/Ptag'
import { ImCheckmark } from 'react-icons/im'
import Button from '../Components/Button'
import Pricingcarditem from '../Components/Pricingcarditem'
import Pricingcard from '../Components/Pricingcard'

const Priceing = () => {
  let [change, setChange] = useState(true)

  return (
    <section className="pt-10 lg:pt-100 pb-8 lg:pb-75">
      <Title content={`Affordable Pricing`} className={`text-center`} />
      <Container>
        <div>
          <Flex className={`w-screen lg:w-auto justify-center gap-x-25 items-center my-35`}>
            <p className="font-roboto font-normal test-lg">Monthly</p>
            <button
              onClick={() => setChange(!change)}
              className="w-20 h-8 lg:h-10 bg-primary rounded-full p-1"
            >
              <span
                className={`block w-6 lg:w-8 h-6 lg:h-8 bg-white rounded-full ${change ? "ml-auto" : "mr-auto"} `}
              ></span>
            </button>
            <p className="font-roboto font-normal test-lg">Annualy</p>
          </Flex>
          <Flex className={`w-screen lg:w-auto flex-col gap-6 lg:flex-row items-center lg:justify-between flex-wrap`}>
            {change ? (
              <>
                <Pricingcard
                  packagename={`Free Plan`}
                  price={`0`}
                  duration={`monthly`}
                  btntext={`try for free`}
                />
                <Pricingcard
                  packagename={`Premium Plan`}
                  price={`599`}
                  duration={`year`}
                  btntext={`buy now`}
                />
                <Pricingcard
                  packagename={`Business Plan`}
                  price={`999`}
                  duration={`year`}
                  btntext={`buy now`}
                />
              </>
            ) : (
              <>
                <Pricingcard
                  packagename={`Free Plan`}
                  price={`0`}
                  duration={`monthly`}
                  btntext={`try for free`}
                />
                <Pricingcard
                  packagename={`Premium Plan`}
                  price={`200`}
                  duration={`year`}
                  btntext={`buy now`}
                />
                <Pricingcard
                  packagename={`Business Plan`}
                  price={`300`}
                  duration={`year`}
                  btntext={`buy now`}
                />
              </>
            )}

            {/*  */}
          </Flex>

          {/* <div className="bg-lightgray rounded-xl pt-50 px-31 pb-44 w-366">
            <p className="font-raleway text-22 font-bold text-seagreen pb-11">
              Free Plan
            </p>
            <strong className="font-inter font-bold text-5xl text-seagreen">
              $0{" "}
            </strong>{" "}
            <span className="font-roboto text-base font-semibold">
              / monthly
            </span>
            <div className="border-2 border-b-olive/20 mt-35 mb-35"></div>
            <Flex className={`flex-col gap-27`}>
              <Pricingcarditem text={`Access to editing all blocks`}/>
              <Pricingcarditem text={`Editing blocks together`}/>
              <Pricingcarditem text={`Access to all premium icons`}/>
              <Pricingcarditem text={`A dedicated domain`}/>
              
            </Flex>
            <Button content={`Try for Free`} hover={true} className={`mt-35`}/>
          </div> */}

          <Flex />
        </div>
      </Container>
    </section>
  );
}

export default Priceing