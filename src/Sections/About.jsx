
import React from 'react'

import { RiStarSFill } from "react-icons/ri";

import About1 from '../assets/about1.png'
import About2 from '../assets/about2.png'
import About3 from '../assets/about3.png'

import Container from '../Components/Container'
import Ptag from '../Components/Ptag'
import Title from '../Components/Title'
import Flex from '../Components/Flex';
import Aboutcard from '../Components/Aboutcard';

const About = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute -z-10 -inset-[2px] bg-[rgb(13,85,76)] [clip-path:polygon(0%_0%,100%_0%,100%_80%)] '></div>

      <Container className={`bg-offwhite lg:p-50 lg:mb-100  shadow-xl`}>
        <Flex className={`w-[100vw] px-4 lg:px-0 lg:pt-0 text-center lg:text-start lg:w-auto flex-col lg:flex-row lg:justify-between lg:items-center`}>
          <div>
            <Ptag content={`Who we are`} className={`!font-bold !text-sm !text-primary font-raleway pt-[20px] lg:pt-0 lg:mb-17`}/>
            <Title className={`w-auto lg:w-750`} content={`More than 5,000 users around the world are already using STDEV actively`} />
          </div>
          <div>
            <Flex className={`flex-col w-[200px] my-6 lg:my-0 mx-auto items-center px-9 py-31 bg-darkwhite border border-deepgreena`}>
              <p className='font-inter font-bold text-50 text-deepgreen'>4.8</p>
              <Flex className={`gap-1`}>
                <RiStarSFill className='text-orange text-2xl font-semibold'/>
                <RiStarSFill className='text-orange text-2xl font-semibold'/>
                <RiStarSFill className='text-orange text-2xl font-semibold'/>
                <RiStarSFill className='text-orange text-2xl font-semibold'/>
                <RiStarSFill className='text-orange text-2xl font-semibold'/>
              </Flex>
              <Ptag content={`35 Reviews`} className={`font-roboto !text-olive`} />
            </Flex>
          </div>
        </Flex>
        <div className='w-[100vw] lg:w-auto  border-b border-deepgreena lg:mt-20'></div>
        <Flex className='flex-col gap-6 items-center  lg:flex-row w-[100vw] lg:w-auto pt-25 pb-6 lg:pb-0 mb-10 lg:mb-0 justify-between'>
          <Aboutcard src={About1} title="70+" des="Professionals"/>
          <Aboutcard src={About2} title="22 Years" des="Year of experience"/>
          <Aboutcard src={About3} title="$40+M" des="Fundraised by customers"/>
        </Flex>
      </Container>
    </section>
  )
}

export default About