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
    <section className="bg-lightgray pt-6 lg:pt-100 pb-8 lg:pb-75">
      <Title
        content={`All product work with several devices.`}
        className={`w-auto lg:w-368 m-auto text-center mb-3 lg:mb-25 px-4 lg:px-0`}
      />
      <Ptag
        content={`A great SaaS UI/UX design can make your product addictive and uncomfortable to give up.`}
        className={`font-roboto w-auto lg:w-454 text-center !text-olive m-auto mb-4 lg:mb-35 px-4 lg:px-0`}
      />
      <Container>
        <div className='w-screen px-4 lg:px-0 lg:w-auto'>
          <Flex
            className={`justify-center gap-3 lg:gap-5 mb-6 lg:mb-56 lg:w-auto`}
          >
            <Img src={Mcstore} className={`w-20 lg:w-32  lg:h-10`} />
            <Img src={Appstore} className={`w-20 lg:w-32  lg:h-10`} />
          </Flex>
          <Img
            src={Overviewimg}
            alt={`img`}
            className={`w-[80vw] lg:w-1145 lg:h-760 mx-auto`}
          />
        </div>
      </Container>
    </section>
  );
}

export default Overview