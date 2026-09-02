import React from "react";
import Bennerimg from '../assets/Bennerimg.png'

import Container from '../Components/Container'
import Ptag from "../Components/Ptag";
import Img from "../Components/Img";

const herro = () => {
  return (
    <div>
      <section className="bg-headerbg relative">
        <Container className={`flex justify-between py-[150px]`}>
          <div>
            <Ptag className={`font-raleway !font-bold !text-lg`} content="Business & Technologies"/>

            <h6 className="font-raleway font-bold text-[52px] leading-[61px] w-[459px] text-offwhite mt-[11px] mb-[44px]">We help tech companies deliver great software</h6>
            
            <Ptag className={`font-roboto w-[552px]`} content="Since 1999. For millions of users. We transform businesses with powerful and"/>
            <Ptag className={`font-roboto w-[552px]`} content="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."/>
            <div className="h-[56px] relative mt-[44px]">
             <input type="text" placeholder="" className="w-full h-full outline-none text-2xl font-raleway  font-semibold px-4 rounded-md"  />
             <button className="bg-primary px-6 py-4 rounded-r-md text-base font-raleway text-offwhite font-semibold absolute top-0 right-0">Request for Demo</button>
            </div>
          </div>
          <Img src={Bennerimg} alt="benner img" className={`w-[755px] h=[537px] absolute top-1/2 -translate-y-1/2 left-[53%]`} />
        </Container>
      </section>
    </div>
  );
};

export default herro;
