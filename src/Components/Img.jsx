import React from 'react'

const Img = ({src, alt, className}) => {
  return (
    <div className={className}>
      <img className='w-full h-full object-cover object-center'  src={src} alt={alt} />
    </div>
  )
}

export default Img