import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Lilist = ({content, icon, hover, className}) => {
  return (
    <>
      <li className={`font-Inter list-none text-nevwhite text-base font-medium cursor-pointer ${hover && 'hover:text-red-500 duration-150'} ${className}`}> {content} {icon && <FaChevronDown  className='inline'/>} </li>
      
    </>
  )
}

export default Lilist