
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
    <section>
      <Container className={`bg-offwhite p-50 mb-100  shadow-xl`}>
        <Flex className={`justify-between items-center`}>
          <div>
            <Ptag content={`Who we are`} className={`!font-bold !text-sm !text-primary font-raleway mb-17`}/>
            <Title className={`w-750`} content={`More than 5,000 users around the world are already using STDEV actively`} />
          </div>
          <div>
            <Flex className={`flex-col items-center px-9 py-31 bg-darkwhite border border-deepgreena`}>
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
        <div className='border-b border-deepgreena mt-20'></div>
        <Flex className='pt-25 justify-between'>
          <Aboutcard src={About1} title="70+" des="Professionals"/>
          <Aboutcard src={About2} title="22 Years" des="Year of experience"/>
          <Aboutcard src={About3} title="$40+M" des="Fundraised by customers"/>
        </Flex>
      </Container>
    </section>
  )
}

export default About