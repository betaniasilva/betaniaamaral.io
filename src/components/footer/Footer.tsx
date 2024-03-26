/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io'
import { footerData } from '../../constants/footerData'

const Footer = () => {
  const {title, navLinks, socialRedes, copyWriter} = footerData
  return (
    <footer>
      <a href="#" className='footer__logo'>{title}</a>

      <ul className='permalinks'>
        {navLinks.map(link => (<li><a href={link.href}>{link.text}</a></li>))}
      </ul>

      <div className="footer__socials">
        {socialRedes.map((item) => (
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.name === 'Facebook' && <FaFacebookF />}
          {item.name === 'Instagram' && <FiInstagram />}
          {item.name === 'Linkedin' && <IoLogoLinkedin />}
          {item.name === 'Github' && <IoLogoGithub />}
        </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>{copyWriter}</small>
      </div>
    </footer>
  )
}

export default Footer