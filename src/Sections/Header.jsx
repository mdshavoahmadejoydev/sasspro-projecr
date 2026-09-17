import React, { useState } from 'react'

import Headerimg from '../assets/Headerimg.png'
import Lilist from '../Components/Lilist'

import Img from '../Components/Img'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { RiMenuUnfold3Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {


  const [show, setShow] = useState(false);

  let handleClick = () => setShow(!show)
  let handleNavClick = () => {
  setShow(false);
};

  return (
    <>
    {/* desktop */}
      <header className="bg-headerbg hidden lg:block">
        <Container className={`flex justify-between items-center py-25`}>
          <Img src={Headerimg} alt="company logo" className={`w-148 h-6`} />
          <Flex className={`items-center`}>
            <Flex className={`gap-4`}>
              <Link className="group" to="/" ><Lilist content="Home" hover={true} icon={true} /></Link>
              <Link className="group" ><Lilist content="Pages" hover={true} icon={true} /></Link>
              <Link className="group" to="/services" ><Lilist content="Services" hover={true} /></Link>
              <Link className="group" to="blog" ><Lilist content="Blog" hover={true} /></Link>
              <Link className="group" to="contact" ><Lilist content="Contact" hover={true} /></Link>
              <Link to="/*" ></Link>
            </Flex>
            <button className="border border-offwhite rounded-md px-23 py-2.5 text-base text-offwhite font-semibold font-inter ml-35  hover:border-red-500 duration-150">
              Let's talk
            </button>
          </Flex>
        </Container>
      </header>

      {/* mobile */}
      <header className='bg-headerbg lg:hidden relative '>
        <Flex className={`items-center justify-between px-4`}>
          <Img src={Headerimg} alt="company logo" className={`w-148 h-6`} />
          <button  onClick={handleClick} className='py-4'>
            {
              show ? 
              <IoClose className='text-offwhite text-2xl'/>
              :
              <RiMenuUnfold3Line  className='text-offwhite text-2xl'/>
            }           
          </button>         
        </Flex>
        {
          show && 
          <Flex className='absolute top-56 z-50 right-0 bg-primary flex-col items-center w-1/2 rounded-md animate-[slideDown_0.4s_ease-in-out]'>
            <Flex className={`gap-4 sm:gap-6 flex-col my-4 sm:my-6`}>
              <Link onClick={handleNavClick} className="group" to="/" ><Lilist content="Home" icon={true} /></Link>
              <Link onClick={handleNavClick} className="group" ><Lilist content="Pages" icon={true} /></Link>
              <Link onClick={handleNavClick} className="group" to="/services" ><Lilist content="Services" /></Link>
              <Link onClick={handleNavClick} className="group" to="blog" ><Lilist content="Blog" /></Link>
              <Link  onClick={handleNavClick} className="group" to="contact" ><Lilist  content="Contact" /></Link>
              <Link to="/*" ></Link>
            </Flex>
            <button className="border border-offwhite rounded-md px-23 py-2.5 text-base text-offwhite font-semibold font-inter mb-4 sm:mb-6">
              Let's talk
            </button>
          </Flex>
        }
      </header>
    </>
  );
}

export default Header