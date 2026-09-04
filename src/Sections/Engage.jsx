import React from 'react'

import Engageimg from '../assets/engageimg.png'

import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Img from '../Components/Img'
import Title from '../Components/Title'
import Ptag from '../Components/Ptag'
import Button from '../Components/Button'


const Engage = () => {
  return (
    <section>
      <Container className={`pt-28 pb-70`}>
        <Flex className={`justify-center gap-10 items-center`}>
          <Img src={Engageimg} alt={`engage graph`} className={`w-544 h-498`} />
          <div>
            <Title content={`Don’t just engage, make it engaging.`} className={`w-443`}  />
            <div className=' mt-6 mb-44'>
              <Ptag content={`Since 1999. For millions of users. We transform businesses with powerful and`} className={`w-530 !text-olive`} />
              <Ptag content={`adaptable digital solutions`} className={`w-530 !text-olive`} />
              <Ptag content={`Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim.`} className={`w-530 !text-olive`} />
            </div>
            
            <Button content={`Read More`} hover={true} border={true}/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Engage