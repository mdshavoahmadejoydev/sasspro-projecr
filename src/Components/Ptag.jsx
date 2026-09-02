import React from 'react'

const Ptag = ({content, className}) => {
  return (
    <>
      <p className={`text-offwhite text-base leading-[27px] font-normal ${className}`}>{content}</p>
    </>
  )
}

export default Ptag