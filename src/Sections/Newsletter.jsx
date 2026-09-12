import React from 'react'
import Newsletterimg from '../assets/Newsletterimg.png'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Title from '../Components/Title'
import Ptag from '../Components/Ptag'
import Button from '../Components/Button'
import Img from '../Components/Img'

const Newsletter = () => {
  return (
    <section className='py-10 lg:py-106'>
      <Container>
        <Flex className={`flex-col lg:flex-row items-center w-screen lg:w-auto lg:justify-between`}>
          <div className='w-screen px-4 text-center lg:text-start lg:px-0 lg:w-3/5'>
            <p className='text-sm font-bold font-raleway text-primary'>OUR NEWSLETTER</p>
            <Title content={`Stay up to date`} className={`mt-1 mb-2 lg:mb-27`}/>
            <Ptag content={`With our weekly newsletter you will stay informed about important informationin the HR world, new Corona work guidelines.`} className={`lg:w-552 font-roboto !text-olive mb-4 lg:mb-50`}/>

            <Flex className={`gap-1 lg:gap-2  justify-center`}>
              <input type="text" className='outline-none font-Raleway text-olive text-2xl font-semibold px-4 py-1 lg:py-5 w-200 lg:w-full border border-primary border-solid rounded-md' /> 
              <Button content={`Subscribe`} hover={true} border={true} />
            </Flex>
          </div>
          <Img src={Newsletterimg} alt={`img`} className={`lg:h-346 w-340 lg:w-501 mt-6 lg:mt-0`} />
        </Flex>
      </Container>
    </section>
  )
}

export default Newsletter