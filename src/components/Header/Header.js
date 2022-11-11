import React from 'react'
import './Header.css'
import smartphonecheckvideo from '../../assets/smartphonecheck.mp4'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-rand'>

      </div>

<video autoPlay loop muted id='video'>
        <source src={smartphonecheckvideo} type='video/mp4'/>
      </video>
      
      
      
      </div>
  )
}

export default Header
