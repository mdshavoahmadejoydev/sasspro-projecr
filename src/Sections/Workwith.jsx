import React from 'react'

import Workwithimg1 from '../assets/workwith1.png'
import Workwithimg2 from '../assets/workwith2.png'
import Workwithimg3 from '../assets/workwith3.png'

import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Workwithcard from '../Components/Workwithcard'
import Title from '../Components/Title'

const Workwith = () => {
  return (
    <section className='bg-lightgray py-10 lg:py-100 overflow-x-hidden'>
      <Title content={`The Product we work with.`} className={`text-center mb-4 lg:mb-56`} />
      <Container>
        <Flex className={`w-screen sm:px-4 lg:px-0 lg:auto flex-col items-center md:flex-row lg:flex-row  md:flex-wrap md:justify-center sm:justify-center lg:justify-start  gap-9`}>
          <Workwithcard src={Workwithimg1} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
          <Workwithcard src={Workwithimg2} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
          <Workwithcard src={Workwithimg3} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
        </Flex>
      </Container>      
    </section>
  )
}

export default Workwith