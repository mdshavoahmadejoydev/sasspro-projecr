import React from 'react'

const Img = ({src, alt}) => {
  return (
    <>
      <img className='w-20 h-20 object-cover object-center'  src={src} alt={alt} />
    </>
  )
}

export default Img