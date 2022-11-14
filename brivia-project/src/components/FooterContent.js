import React from 'react'
import LogoSocialNetWorks from './LogoSocialNetWorks'
import LinkVector from '../img/link-vector.svg'
import '../styles/footercontent/footercontent.css'


const FooterContent = () => {
  return (
    <div className='footer-background'>
        <div className='footer-content-two'>
            <div className='logo-group-footer'></div>
            <LogoSocialNetWorks></LogoSocialNetWorks>
            <div className='main-link-footer '>
            <div className='title-link-footer'>ACESSE O SITE</div>
            <div className='logo-link-footer'><a href='https://www.brivia.com.br' 
                target='_blank' rel='noreferrer'>
              <img src={ LinkVector } alt = "Logo do link" /></a>
            </div>
          </div> 
        </div>                
    </div>    
  )
}

export default FooterContent