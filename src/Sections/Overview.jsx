import React from 'react'

import Mcstore from '../assets/mcstore.png'
import Appstore from '../assets/appstore.png'
import Overviewimg from '../assets/overviewimg.png'

import Title from '../Components/Title'
import Ptag from '../Components/Ptag'
import Flex from '../Components/Flex'
import Img from '../Components/Img'
import Container from '../Components/Container'

const Overview = () => {
  return (
    <section className='bg-lightgray pt-100 pb-75'>
      <Title content={`All product work with several devices.`} className={`w-368 m-auto text-center mb-25`} />
      <Ptag content={`A great SaaS UI/UX design can make your product addictive and uncomfortable to give up.`} className={`font-roboto w-454 text-center !text-olive m-auto mb-35`} />
      <Container>
        <Flex className={`justify-center gap-5 mb-56`}>
          <Img src={Mcstore} className={`w-32 h-10`} />
          <Img src={Appstore} className={`w-32 h-10`} />
        </Flex>
        <Img src={Overviewimg} alt={`img`} className={`w-1145 h-760 m-auto`}/>
      </Container>
      

    </section>
  )
}

export default Overview