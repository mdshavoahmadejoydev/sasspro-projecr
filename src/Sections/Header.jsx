import React from 'react'

import Headerimg from '../assets/Headerimg.png'
import Lilist from '../Components/Lilist'

import Img from '../Components/Img'
import Container from '../Components/Container'
import Flex from '../Components/Flex'

const Header = () => {
  return (
    <header className='bg-headerbg'>
      <Container className={`flex justify-between items-center py-[25px]`} >
        <Img src={Headerimg} alt="company logo" className={`w-[148px] h-[24px]`} />
        <Flex className={`items-center`}>
          <Flex className={`gap-4`}>
            <Lilist content="Home" icon={true} />
            <Lilist content="Pages" icon={true} />
            <Lilist content="Services"/>
            <Lilist content="Blog"/>
            <Lilist content="Contact"/>
          </Flex>
          <button className='border border-offwhite rounded-md px-[23px] py-[10px] text-base text-offwhite font-semibold font-inter ml-[35px]  hover:border-red-500 duration-150'>Let's talk</button>
        </Flex>
      </Container>
    </header>
  )
}

export default Header