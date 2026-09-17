import React from 'react'
import Herro from '../Sections/Herro'
import About from '../Sections/About'
import Industry from '../Sections/Industry'
import Overview from '../Sections/Overview'
import Engage from '../Sections/Engage'
import Workwith from '../Sections/Workwith'
import Priceing from '../Sections/Priceing'
import Newsletter from '../Sections/Newsletter'
import Article from '../Sections/Article'

export const Home = () => {
  return (
    <>
      <Herro/>
      <About />
      <Industry />
      <Overview />
      <Engage/>
      <Workwith/>
      <Priceing/>
      <Newsletter/>
      <Article/>
    </>
  )
}
