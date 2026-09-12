import React from "react";
import Bennerimg from "../assets/Bennerimg.png";

import Container from "../Components/Container";
import Ptag from "../Components/Ptag";
import Img from "../Components/Img";
import Flex from "../Components/Flex";

const herro = () => {
  return (
    <div>
      <section className="bg-headerbg lg:relative overflow-hidden  py-10 lg:py-150">
        <Container className={`flex justify-between`}>
          <Flex className={`flex-col lg:flex-row`}>
            <div className="w-screen px-4 lg:px-0 text-center lg:text-start lg:w-1/2">
              <Ptag
                className={`font-raleway !font-bold !text-lg`}
                content="Business & Technologies"
              />

              <h6 className="font-raleway font-bold text-4xl lg:text-52 leading-10 lg:leading-61 w-auto lg:w-459 text-offwhite mt-11 mb-11">
                We help tech companies deliver great software
              </h6>

              <Ptag
                className={`font-roboto w-auto lg:w-552 mt-25`}
                content="Since 1999. For millions of users. We transform businesses with powerful and"
              />
              <Ptag
                className={`font-roboto w-auto lg:w-552 mb-25`}
                content="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
              />
              <div className="h-9 mx-auto w-320 lg:w-full lg:h-56 relative mt-11">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-full outline-none text-2xl font-raleway  font-semibold px-4 rounded-md text-olive"
                />
                <button className="bg-primary px-3 lg:px-6 py-2 lg:py-4 rounded-r-md text-sm lg:text-base font-raleway text-offwhite font-semibold absolute top-0 right-0">
                  Request for Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 pt-4 lg:pt-0">
              <Img
                src={Bennerimg}
                alt="benner img"
                className={`w-[80vw] mx-auto lg:w-755 lg:h=537 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[53%]`}
              />
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  );
};

export default herro;
