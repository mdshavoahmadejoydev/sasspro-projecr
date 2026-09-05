import React from 'react'
import Reviewimg1 from '../assets/review1.png'
import Reviewimg2 from '../assets/review2.png'
import Linkimg from '../assets/link.png'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Img from '../Components/Img'
import Title from '../Components/Title'
import Ptag from '../Components/Ptag'
import Reviewcard from '../Components/Reviewcard'

const Reviews = () => {
  return (
    <section className='bg-lightgray py-150'>
      <Container>
        <Flex className={`justify-between gap-9`}>
          <div  className='w-2/5'>
            <Img src={Linkimg} alt={`img`} className={`w-60 h-60`} />
            <Title content={`What our clients say about us`} className={`w-469 text-seagreen my-27`} />
            <Ptag content={`Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit.`} className={`font-roboto w-433 !text-olive`} />
          </div>

          <Flex className={`justify-between w-3/5`}>
            <Reviewcard des={`Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi.`} src={Reviewimg1} name={`Davis Lubin`} proff={`CEO of Fashionon`} className={`shadow-2xl`}/>
          
            <Reviewcard des={`Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi.`} src={Reviewimg2} name={`Leslie Alexander`} proff={`CEO of Fashionon`} className={`shadow-2xl`}/>
          </Flex>         
        </Flex>
      </Container>
      
      
    </section>
  )
}

export default Reviews