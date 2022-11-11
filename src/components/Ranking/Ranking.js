import React, {useState} from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'
import Details from '../Details'

const Ranking = () => {
const {data,loading,error} = useFetch("https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields&content_type=article")

const [showDetails, setShowDetails] = useState(false);

const  handleClick = event  => {
setShowDetails(!showDetails);
console.log("Button clicked");
}

if(data){ 
  if(loading){
    return <h1>Loading ...</h1>
  }if(error){
    return <h1 style={{color:"red"}}>Error could not fetch Data</h1>
  } 
console.log(data)

const items = data.items
const includes = data.includes;

const displayValues = items.map((info, index) => {
  return info.fields.articleDescription.content[3].content.map((values, index) =>{
  return values.content[1].content[0].value             
});     
})
const cameraValues = items.map((info2, index) =>{
  return info2.fields.articleDescription.content[5].content.map((values2, index) => {
  return values2.content[0].content[0].value
})
});
const hardwareValues = items.map((info3, index) =>{
    return info3.fields.articleDescription.content[7].content.map((values3, index) => {
    return values3.content[0].content[0].value
})
})

return (
  <div>
    <input placeholder='Suche' id="search"></input>
      {items.map((index, item) => 
      <div id="inhalt" key={index}>
        <h1>{items[item].fields.title}</h1>
        <img src={includes.Asset[item].fields.file.url}></img>
        <h2>{items[0].fields.articleDescription.content[0].content[0].value}</h2>
        <p>{items[item].fields.articleDescription.content[1].content[0].value}</p>
        <br></br>
        <a target="_blank" href={items[0].fields.linkToWebsite}>Checkout the Official Website</a>
        <h2>{items[0].fields.articleDescription.content[8].content[0].value}</h2>
        <h3>{items[item].fields.articleDescription.content[9].content[0].content[0].content[0].value}</h3>
        <h2>{items[item].fields.conclusion.content[0].content[0].value}</h2>
        <p>{items[item].fields.conclusion.content[1].content[0].value}</p>
        <br></br>
        <h1>Our Ranking:{items[item].fields.pricePerformance}/5</h1>
        <div id="detailsBtn" onClick={handleClick}><i title="Show/Hide Details" style={{fontSize:"25px"}} className="fa fa-angle-down"></i></div>
        {showDetails &&(        
        <div id="details">
        <Details />
        <h2>{items[0].fields.articleDescription.content[2].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start", justifyContent:"space-evenly"}}>
          <br></br>
          <ul id="display-values">
            <li>{displayValues}</li>
          </ul>
        </div>
        <h2>{items[1].fields.articleDescription.content[4].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start"}}>
          <ul id="camera-values">
            <li>{cameraValues}</li>
          </ul>  
        </div>
        <h2>{items[1].fields.articleDescription.content[6].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start"}}>
          <ul id="hardware-values">
            <li>{hardwareValues}</li>
          </ul>
        </div>
        <br></br>
      </div>
        )}
      </div>        
     )}
</div>
)
}
}

export default Ranking



