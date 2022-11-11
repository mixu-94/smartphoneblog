import React from 'react'
import './Footer.css'
import useFetch from '../../constants/useFetch'
import { useEffect } from 'react'




const Footer = () => {

  const API_URL_HEADER = "https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields.title,fields.logo,fields.link&content_type=footer"


  const {data, loading, error } =  useFetch(API_URL_HEADER)

  let logo = null;
  let title = null;

  if (data) {
    console.log(data)
  const footerimpressum = data.includes.Entry[0].fields.footerlinktitle
  const footertitle = data.items[0].fields.title
  
  console.log(footertitle)
  const footerurl = data["includes"]["Asset"][0]["fields"]["file"]["url"]
  console.log(footerurl)
  
 
  

  return (
    <div className='footer'>
        <img className='footerimg' src={footerurl} alt='test' />
            <div className='footerthings'>
              
              <div className='footertitle'>{footertitle}</div>
              <div>{footerimpressum}</div>
                        
                  
              
              
            </div>
    </div>
  )
}
}

export default Footer