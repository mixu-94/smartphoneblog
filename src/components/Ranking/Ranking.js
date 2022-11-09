import React from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'
import { convertLength } from '@mui/material/styles/cssUtils'

const Ranking = () => {

const {data,loading,error} = useFetch("https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields&content_type=article")

console.log(data);



if(data){ 
  if(loading){
    return <h1>Loading ...</h1>
  }if(error){
    return <h1 style={{color:"red"}}>Error could not fetch Data</h1>
  } 

const items    = data.items;
const includes = data.includes;

const images   = includes.Asset[0].fields.file.url;

console.log({images});

return (
  <div>
      {    
       items.map((index, item) => 

      <div id="inhalt" key={index}>
      <h1>{items[item].fields.title}</h1>
        <img src={includes.Asset[item].fields.file.url}></img>
       { console.log(items[item].fields.title) }
       { console.log(includes.Asset[0].fields.file.url) }
       { console.log(items[item].fields.articleDescription.content[item].content[item])}
       { console.log(items[item].fields.articleDescription.content[item].content[0].value)}
       { console.log(items[item].fields.articleDescription.content[item].content[0].value)}

        <h2>{items[0].fields.articleDescription.content[0].content[0].value}</h2>
        <p>{items[item].fields.articleDescription.content[1].content[0].value}</p>
        <h2>{items[0].fields.articleDescription.content[2].content[0].value}</h2>



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

