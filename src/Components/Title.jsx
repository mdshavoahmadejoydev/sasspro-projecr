import React from 'react'

const Title = ({content, className}) => {
  return (
    <>
      <h2 className={`font-bold font-raleway text-4xl text-deepgreen leading-[48px] ${className}`}>{content}</h2>
    </>
  )
}

export default Title