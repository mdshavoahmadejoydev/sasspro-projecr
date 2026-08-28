import React from 'react'

const Button = ({content, hover, border, className}) => {
  return (
    <>
      <button className={`font-Raleway text-btnwhite bg-primary text-base font-semibold px-12 py-5 rounded-md ${border &&'border border-transparent'}
      ${hover && 'hover:border-black hover:bg-transparent hover:text-primary'} ${className}
      duration-150`}>{content}</button>
    </>
  )
}

export default Button