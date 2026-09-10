import React from 'react'
import Header from './Sections/Header'
import Herro from './Sections/Herro'
import About from './Sections/About'
import Industry from './Sections/Industry'
import Overview from './Sections/Overview'
import Engage from './Sections/Engage'
import Workwith from './Sections/Workwith'
import Reviews from './Sections/Reviews'
import Newsletter from './Sections/Newsletter'
import Article from './Sections/Article'
import Priceing from './Sections/Priceing'

const App = () => {
  return (
    <>
      <Header/>
      <Herro />
      <About/>
      <Industry />
      <Overview />
      <Engage />
      <Workwith/>
      <Priceing />
      <Reviews/>
      <Newsletter/>
      <Article/>
    </>
  )
}

export default App