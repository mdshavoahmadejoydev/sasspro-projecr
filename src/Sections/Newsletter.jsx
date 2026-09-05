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
    <section className='py-106'>
      <Container>
        <Flex className={`justify-between`}>
          <div className='w-3/5'>
            <p className='text-sm font-bold font-raleway text-primary'>OUR NEWSLETTER</p>
            <Title content={`Stay up to date`} className={`mt-1 mb-27`}/>
            <Ptag content={`With our weekly newsletter you will stay informed about important informationin the HR world, new Corona work guidelines.`} className={`w-552 font-roboto !text-olive mb-50`}/>

            <Flex className={`gap-2`}>
              <input type="text" className='outline-none font-Raleway text-olive text-2xl font-semibold px-4 py-5 w-full border border-primary border-solid rounded-md' /> 
              <Button content={`Subscribe`} hover={true} border={true} />
            </Flex>
          </div>
          <Img src={Newsletterimg} alt={`img`} className={`h-346 w-501`} />
        </Flex>
      </Container>
    </section>
  )
}

export default Newsletter