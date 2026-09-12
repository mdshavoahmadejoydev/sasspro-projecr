import React from 'react'

const Button = ({content, hover, border, className}) => {
  return (
    <>
      <button className={`font-Raleway text-offwhite bg-primary text-base font-semibold px-6 lg:px-12 py-2 lg:py-5 rounded-md ${border &&'border border-transparent'}
      ${hover && 'hover:border-primary hover:bg-transparent hover:text-primary'} ${className}
      duration-150`}>{content}</button>
    </>
  )
}

export default Button