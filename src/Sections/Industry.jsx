import React from 'react'



import Industryimg1 from '../assets/industryimg1.png'
import Industryimg2 from '../assets/industryimg2.png'
import Industryimg3 from '../assets/industryimg3.png'
import Industryimg4 from '../assets/industryimg4.png'
import Industryimg5 from '../assets/industryimg5.png'
import Industryimg6 from '../assets/industryimg6.png'

import Title from '../Components/Title'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Indistrycard from '../Components/Indistrycard';

const Industry = () => {
  return (
    <section>
      <Title content={`Industries in focus`} className={`text-center mb-56`}/>
      <Container className={`pb-100`}>
        <Flex className={`flex-wrap justify-center gap-9`}>
          <Indistrycard src={Industryimg1} title={`FinTech`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>
          
          <Indistrycard src={Industryimg2} title={`Telecom`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>

          <Indistrycard src={Industryimg1} title={`Retail`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>
          
          <Indistrycard src={Industryimg1} title={`Transportation`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>
          
          <Indistrycard src={Industryimg2} title={`eLearning`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>

          <Indistrycard src={Industryimg1} title={`Artificial Intelligence`} des={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`}/>



          


        </Flex>
      </Container>
    </section>
  )
}

export default Industry