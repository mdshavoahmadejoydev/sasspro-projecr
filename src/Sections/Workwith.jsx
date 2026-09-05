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
    <section className='bg-lightgray py-100'>
      <Title content={`The Product we work with.`} className={`text-center mb-56`} />
      <Container>
        <Flex className={`justity-center gap-9`}>
          <Workwithcard src={Workwithimg1} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
          <Workwithcard src={Workwithimg2} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
          <Workwithcard src={Workwithimg3} title={`Consulting`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
        </Flex>
      </Container>      
    </section>
  )
}

export default Workwith