import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Lilist = ({content, icon, className}) => {
  return (
    <>
      <li className={`font-Inter  text-nevwhite text-base font-medium ${className}`}> {content} {icon && <FaChevronDown  className='inline'/>} </li>
      
    </>
  )
}

export default Lilist