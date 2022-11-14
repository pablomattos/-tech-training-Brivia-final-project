import React from 'react'
import { Link } from 'react-router-dom'
import LinkVector from '../img/link-vector.svg'
import '../styles/headercontent/headercontent.css'

const HeaderContent = (props) => {
  return (
    <div className='header-content'>
      <div className='background-imagem'>
        <div className='header-content-two'>
          <div className='logo-group'></div>
            <div className='main-link'>
              <div className='title-link'>{props.page}</div>
              <div className='logo-link'><Link to={props.rota} target='_blank'
          rel='noreferrer'><img src={ LinkVector } alt = "Logo do link" /></Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent