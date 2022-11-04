import React from 'react'
import './Navbar.css'
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {

  const API_URL_HEADERNAV = "https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields&content_type=headernav"
    

    const navbarliste = (list) => {
        list.map((item) => {
            <a href='' key={uuidv4()}>  </a>
        })
    }
  return (
    <div className='navbar'>
      
      
      Navbar</div>
  )
}

export default Navbar