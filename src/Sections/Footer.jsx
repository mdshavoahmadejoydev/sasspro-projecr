import React from 'react'
import Headerimg from '../assets/Headerimg.png'
import Img from '../Components/Img'
import Container from '../Components/Container'
import Ptag from '../Components/Ptag'
import { MdFacebook } from 'react-icons/md'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import Flex from '../Components/Flex'
import Footerlist from '../Components/Footerlist'

const Footer = () => {
  return (
    <>
    <footer className="bg-seagreen pt-90 pb-75">
      <Container>
        <Flex>
          <div className="w-4/12">
            <Img src={Headerimg} alt="company logo" className={`w-148 h-6`} />
            <Ptag
              className={`w-362 mt-27 mb-35 !text-offwhite/80`}
              content={`Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea.`}
            />
            <Flex className={`gap-4`}>
              <MdFacebook className="text-white" />
              <FaTwitter className="text-white" />
              <FaInstagram className="text-white" />
            </Flex>
          </div>
          <div className="w-2/12">
            <Footerlist title={`Company`} list1={`About us`} list2={`Services`} list3={`Blog`} list4={``}/>
          </div>
          <div className="w-2/12">
            <Footerlist title={`More Links`} list1={`Blog Details`} list2={`Blog Details`} list3={`Contact`} list4={``}/>
          </div>
          <div className="w-4/12">
            <Footerlist title={`Contact Details`} list1={`Amsterdam Netherlands`} list2={`+1 62 19 22 705`} list3={`7 Days - 8am - 10pm`} list4={`info@stdev.com`}/>
          </div>
        </Flex>
      </Container>
    </footer>
    <div className='border-t border-olive/95 '>
      <Ptag className={`bg-seagreen !text-offwhite/70 text-center py-27`} content={`© 2021 All Rights Reserved`} />
    </div>
    </>
  ); 
}

export default Footer