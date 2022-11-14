import React from 'react'
import LogoFace from '../img/logo-face.svg'
import LogoInsta from '../img/logo-insta.svg'
import LogoLinkedin from '../img/logo-linkedin.svg'
import LogoYoutube from '../img/logo-youtube.svg'
import '../styles/logo-social-networks/logosocialnetworks.css'


const LogoSocialNetWorks = () => {
  return (
       <div className='logo-social-networks'>
          <div className='logo-face'>
            <a href='https://www.facebook.com/Brivia/' target='_blank'
               rel='noreferrer'><img src={ LogoFace } alt = "Logo do Face da Brivia" />
            </a>
          </div>
          <div className='logo-insta'>
            <a href='https://www.instagram.com/_brivia/' target='_blank'
                rel='noreferrer'><img src={ LogoInsta } alt = "Logo do Insta da Brivia" />
            </a>
          </div>
          <div className='logo-linkedin'>
            <a href='https://www.linkedin.com/company/briviagroup/?originalSubdomain=br' target='_blank'
                rel='noreferrer'><img src={ LogoLinkedin } alt = "Logo do Linkedin da Brivia" />
            </a>
          </div>
          <div className='logo-youtube'>
            <a href='https://www.youtube.com/channel/UCH0igGlP0h8rVZpbb8O7BWQ' target='_blank'
                rel='noreferrer'><img src={ LogoYoutube } alt = "Logo do Youtube da Brivia" />
            </a>
          </div>
        </div>
  )
}

export default LogoSocialNetWorks