import React from 'react'
import testLogo from '../assets/test-logo.png'

import './Header.css'
import HeaderDate from './HeaderDate'
function Header() {
  return (
    <div className='header'>
        <img src={testLogo} alt="logo"></img>
        <h4 style={{paddingRight:"4%"}}> Daily Overview</h4>
        <HeaderDate/>
    </div>
  )
}

export default Header