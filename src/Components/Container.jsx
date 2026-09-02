import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-1140 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container