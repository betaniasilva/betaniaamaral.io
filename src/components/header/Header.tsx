import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { headerData } from '../../constants/headerData'

const Header = () => {
  const {preTitle, title, subtitle, img, scrollDown} = headerData

  return (
    <header>
      <div className="container header__container">
        <h5>{preTitle}</h5>
        <h1>{title}</h1>
        <h5 className="text-light">{subtitle}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={img} alt={title} />
        </div>

        <a href="#contact" className='scroll__down'>{scrollDown}</a>
      </div>
    </header>
  )
}

export default Header
