import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { headerSocial } from '../../constants/headerData'

const HeaderSocials = () => {

  return (
    <div className='header__socials'>
      {headerSocial.map((item) => (
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.name === 'Linkedin' && <BsLinkedin />}
          {item.name === 'Github' && <FaGithub />}
          {item.name === 'Instagram' && <FiInstagram />}	
        </a>
      ))}
    </div>
  )
}

export default HeaderSocials