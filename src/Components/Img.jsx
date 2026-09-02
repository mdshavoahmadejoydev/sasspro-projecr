import React from 'react'

const Img = ({src, alt, className}) => {
  return (
    <div className={`overflow-hidden rounded-md ${className}`}>
      <img className='w-full h-full rounded-md object-cover object-center'  src={src} alt={alt} />
    </div>
  )
}

export default Img