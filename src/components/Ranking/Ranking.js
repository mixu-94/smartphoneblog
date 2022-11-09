import React from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'
import { convertLength } from '@mui/material/styles/cssUtils'

const Ranking = () => {

const {data,loading,error} = useFetch("https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields&content_type=article")



if(data){ 
  if(loading){
    return <h1>Loading ...</h1>
  }if(error){
    return <h1 style={{color:"red"}}>Error could not fetch Data</h1>
  } 



const items    = data.items;
const includes = data.includes;
const images   = includes.Asset[0].fields.file.url;
const x = items[0].fields.articleDescription.content[3]

console.log(data)


return (
  <div>
      {items.map((index, item) => 

      <div id="inhalt" key={index}>

        <h1>{items[item].fields.title}</h1>
        <img src={includes.Asset[item].fields.file.url}></img>
        <h2>{items[0].fields.articleDescription.content[0].content[0].value}</h2>
        <p>{items[item].fields.articleDescription.content[1].content[0].value}</p>
        <h2>{items[0].fields.articleDescription.content[2].content[0].value}</h2>
        <ul>
          <li>{items[item].fields.articleDescription.content[3].content.map((item,index) =>{
            return <li>{item[index]}</li>
          })}</li>
        </ul>

          

      </div>


/*         <ul>

          <h2></h2>
            
          <h3></h3>
           
          <h2></h2>  
           
          <h2></h2>
          <li></li>
        </ul>

        <h4></h4>
          <p></p>
        <h2></h2>
        <a target="_blank" href="#"></a>
      </div> */
     )}
  </div>
)
}
}

export default Ranking

{/* <li>{x.content[1].content[0].content[0].value} :</li>
<li>{x.content[2].content[0].content[0].value} :</li>
<li>{x.content[3].content[0].content[0].value} :</li>
<li>{x.content[4].content[0].content[0].value} :</li>
<li>{x.content[5].content[0].content[0].value} :</li>
<li>{x.content[6].content[0].content[0].value} :</li>
<li>{x.content[7].content[0].content[0].value} :</li>
<li>{x.content[8].content[0].content[0].value} :</li> */}