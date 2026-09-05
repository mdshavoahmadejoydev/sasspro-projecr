import React from 'react'
import Dublecodtion from '../assets/dublecodtion.png'
import Img from '../Components/Img'
import Ptag from '../Components/Ptag'
import Flex from '../Components/Flex'


const Reviewcard = ({des, src, name, proff, className}) => {
  return (
    <>
      <div>
        <div className={`w-314 bg-offwhite px-31 pt-60 pb-35 rounded-md relative ${className} `}>
          <Ptag content={des} className={`w-242 font-roboto !text-olive`}/>
          
            <Flex className={`items-center mt-25`}>
            <Img src={src} alt={`img`} className={`w-50 h-50 rounded-full`} />
              <div className='ml-4'>
                <p className='text-lg font-semibold text-seagreen mb-2'>{name}</p>
                <p className='text-sm font-normal text-olive'>{proff}</p>
              </div>
            </Flex>
          
          <Img src={Dublecodtion} alt={`img`} className={`w-70 h-70 rounded-full absolute -top-35 left-1/2 -translate-x-1/2`} />
        </div>
      </div>
    </>
  )
}

export default Reviewcard