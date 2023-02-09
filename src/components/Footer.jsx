import React from 'react'
import './Footer.css'
import Github from '../../src/assets/github.png';
import Instagram from '../../src/assets/instagram.png';
import LinkedIn from '../../src/assets/linkedin.png';
import Logo from '../../src/assets/logo.png';

const Footer = () => {
  return (

    <div className='Footer_container'>
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>

      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>

    <div className="blur-f-1"></div>
    <div className="blur-f-2"></div>

     </div>
  )

}

export default Footer
