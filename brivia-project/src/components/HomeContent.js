
import React from 'react'
import FirstImage from  '../img/first-home-responsive.svg'
import SecondImage from '../img/second-home-responsive.svg'
import ThirdImage from  '../img/third-home-responsive.svg'

import '../styles/homecontent/homecontent.css'


const HomeContent = () => {
  return (
    <div className='home-page'>
        <div className='home-two-images'>
          <div className='first-image'>
            <img src= { FirstImage } alt= 'Imagem da primeira home'/>
          </div>
          <div className='second-image'>
            <img src= { SecondImage } alt= 'Imagem da segunda home'/>
          </div>       
        </div>
        <div className='third-image'>
          <img src= { ThirdImage } alt= 'Imagem da terceira home'/>
        </div>
    </div>
  )
}

export default HomeContent