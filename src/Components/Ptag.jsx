import React from 'react'

const Ptag = ({content, className}) => {
  return (
    <>
      <p className={`text-offwhite font-roboto text-base leading-27 font-normal ${className}`}>{content}</p>
    </>
  )
}

export default Ptag