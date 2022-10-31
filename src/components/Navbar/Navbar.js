import React from 'react'
import './Navbar.css'
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
    

    const navbarliste = (list) => {
        list.map((item) => {
            <a href='' key={uuidv4()}>  </a>
        })
    }
  return (
    <div className='navbar'>Navbar</div>
  )
}

export default Navbar