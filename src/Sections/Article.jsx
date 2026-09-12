import React from 'react'

import Articlepimg1 from '../assets/articlepimg1.png'
import Articlepimg2 from '../assets/articlepimg2.png'
import Articlepimg3 from '../assets/articlepimg3.png'

import Articleimg1 from '../assets/articleimg1.png'
import Articleimg2 from '../assets/articleimg2.png'
import Articleimg3 from '../assets/articleimg3.png'

import Title from '../Components/Title'
import Indistrycard from '../Components/Indistrycard'
import Container from '../Components/Container'
import Flex from '../Components/Flex'

const Article = () => {
  return (
    <section className='pt-10 lg:pt-75 pb-10 lg:pb-100 bg-lightgray'>
      <Title content={`Recent News & Articles`} className={`text-center mb-4 lg:mb-56`}/>
      <Container>
        <Flex className={`flex-col lg:flex-row w-screen lg:w-auto items-center lg:justify-center gap-4 lg:gap-9`}>
          <Indistrycard src={Articleimg1} title={`Where Should I Buy Next?`} des={`From romantic getaways to adventurous hikes, find your next...`} showimg={true} proimg={Articlepimg1} proname={`Carter Rosser`} />
          
          <Indistrycard src={Articleimg2} title={`Malesuada Fermentum Tortor`} des={`rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr gsfg sdfg asdrfa sadfg afsdgfa sgdf gsdg ssdfg`} showimg={true} proimg={Articlepimg2} proname={`Carter Rosser`} />
          
          <Indistrycard src={Articleimg3} title={`Magna Malesuada`} des={`From romantic getaways to adventurous hikes, find your next...`} showimg={true} proimg={Articlepimg3} proname={`Carter Rosser`} />
        </Flex>
      </Container>     
    </section>
  )
}

export default Article