import React from "react";
import Bennerimg from '../assets/Bennerimg.png'

import Container from '../Components/Container'
import Ptag from "../Components/Ptag";
import Img from "../Components/Img";

const herro = () => {
  return (
    <div>
      <section className="bg-headerbg relative overflow-hidden">
        <Container className={`flex justify-between py-150`}>
          <div className="w-1/2">
            <Ptag className={`font-raleway !font-bold !text-lg`} content="Business & Technologies"/>

            <h6 className="font-raleway font-bold text-52 leading-61 w-459 text-offwhite mt-11 mb-11">We help tech companies deliver great software</h6>
            
            <Ptag className={`font-roboto w-552 mt-25`} content="Since 1999. For millions of users. We transform businesses with powerful and"/>
            <Ptag className={`font-roboto w-552 mb-25`} content="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."/>
            <div className="h-56 relative mt-11">
             <input type="text" placeholder="" className="w-full h-full outline-none text-2xl font-raleway  font-semibold px-4 rounded-md"  />
             <button className="bg-primary px-6 py-4 rounded-r-md text-base font-raleway text-offwhite font-semibold absolute top-0 right-0">Request for Demo</button>
            </div>
          </div>
          <Img src={Bennerimg} alt="benner img" className={`w-755 h=537 absolute top-1/2 -translate-y-1/2 left-[53%]`} />
        </Container>
      </section>
    </div>
  );
};

export default herro;
