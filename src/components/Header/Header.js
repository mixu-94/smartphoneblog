import React from 'react'
import './Header.css'
import useFetch from '../../constants/useFetch'


const Header = () => {

  const API_URL_HEADER = "https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields.headertitle,fields.headerlogo&content_type=header"


  const {data, loading, error } =  useFetch(API_URL_HEADER)

  let logo = null;
  let title = null;

  if (data) {
    console.log(data)
  const headertitle = data.items
  const headerurl = data["includes"]["Asset"][0]["fields"]["file"]["url"]
  console.log(headerurl)
  // const headerimage = data.includes.Assets[0].fields.file.url 
  // console.log(headerimage)

  // headertitle.map((item) => {
  //   console.log(item)
  //   title = item.fields.headertitle
  //   logo = item.fields.headerlogo.sys.id 
  //   console.log(logo)
 

  return (
    <div className='header'>
        <img src={headerurl} alt='test' />
        <span>TITLE</span>
    </div>
  )
}
}

export default Header