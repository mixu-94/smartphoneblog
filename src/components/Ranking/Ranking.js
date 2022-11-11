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
console.log(data)

const items = data.items


      const displayValues = items.map((info, index) => {
         return info.fields.articleDescription.content[3].content.map((values, index) =>{
         return <li>{values.content[1].content[0].value}</li>
       });
      
     })
     const cameraValues = items.map((info2, index) =>{
        return   info2.fields.articleDescription.content[5].content.map((values2, index) => {
         return  values2.content[0].content[0].value
      })
    });
    const hardwareValues = items.map((info3, index) =>{
      return   info3.fields.articleDescription.content[7].content.map((values3, index) => {
       return  values3.content[0].content[0].value
    })
  })
     console.log(displayValues[0]);
     console.log(cameraValues[0]);
     console.log(hardwareValues[0]);


       
cameraValues[0].forEach((item, index, array) =>{
  return item.index;
  return <li>{item.index}</li>;
})



  
displayValues[0].forEach((item, index, array) =>{
  console.log(item,index);
  return <li>{item.index}</li>
})
     

console.log(data)


const cameraValues_test = items.map((item, index) => {
  console.log(item.fields.articleDescription.content[5].content[0].content[0].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[1].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[2].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[3].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[4].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[6].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[7].content[1].content[0].value) 
  console.log(item.fields.articleDescription.content[5].content[8].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[9].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[10].content[1].content[0].value)
  console.log(item.fields.articleDescription.content[5].content[11].content[1].content[0].value) 
})
console.log(cameraValues_test)

const includes = data.includes;
const images   = includes.Asset[0].fields.file.url;

const dk  = items[0].fields.articleDescription.content[3]
const ck  = items[0].fields.articleDescription.content[5]
const hk4 = items[4].fields.articleDescription.content[7]


const displayKeys = [ 
  dk.content[0].content[0].content[0].value,
  dk.content[1].content[0].content[0].value,
  dk.content[2].content[0].content[0].value,
  dk.content[3].content[0].content[0].value,
  dk.content[4].content[0].content[0].value,
  dk.content[5].content[0].content[0].value,
  dk.content[6].content[0].content[0].value,
  dk.content[7].content[0].content[0].value,
  dk.content[8].content[0].content[0].value,
]
const kameraKeys = [
  ck.content[0].content[0].content[0].value,
  ck.content[1].content[0].content[0].value,
  ck.content[2].content[0].content[0].value,
  ck.content[3].content[0].content[0].value,
  ck.content[4].content[0].content[0].value,
  ck.content[5].content[0].content[0].value,
  ck.content[6].content[0].content[0].value,
  ck.content[7].content[0].content[0].value,
  ck.content[8].content[0].content[0].value,
  ck.content[9].content[0].content[0].value,
  ck.content[10].content[0].content[0].value,
  ck.content[11].content[0].content[0].value,
]
const hardwareKeys = [
  hk4.content[0].content[0].content[0].value,
  hk4.content[1].content[0].content[0].value,
  hk4.content[2].content[0].content[0].value,
  hk4.content[3].content[0].content[0].value,
  hk4.content[4].content[0].content[0].value,
  hk4.content[5].content[0].content[0].value,
  hk4.content[6].content[0].content[0].value,
  hk4.content[7].content[0].content[0].value,
  hk4.content[8].content[0].content[0].value,
  hk4.content[9].content[0].content[0].value,
  hk4.content[10].content[0].content[0].value,
  hk4.content[11].content[0].content[0].value,
]


return (
  <div>
{/*     <h2>{items[0].fields.articleDescription.content[2].content[0].value}</h2>
    <li>{displayValues[0]}</li>
    <li>{displayValues[1]}</li>
    <li>{displayValues[2]}</li>
    <li>{displayValues[3]}</li>
    <li>{displayValues[4]}</li>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <li>{cameraValues[0]}</li>
    <li>{cameraValues[1]}</li>
    <li>{cameraValues[2]}</li>
    <li>{cameraValues[3]}</li>
    <li>{cameraValues[4]}</li> */}
    <div>

    </div>
      {items.map((index, item) => 
      <div id="inhalt" key={index}>
        <h1>{items[item].fields.title}</h1>
        <img src={includes.Asset[item].fields.file.url}></img>
        <h2>{items[0].fields.articleDescription.content[0].content[0].value}</h2>
        <p>{items[item].fields.articleDescription.content[1].content[0].value}</p>
        <h2>{items[0].fields.articleDescription.content[2].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start", justifyContent:"space-evenly"}}>
          <ul id="display-keys">
            {displayKeys.map((item, id) =>{
              return <li>{item}<br></br></li>
            })} 
          </ul>
          <br></br>
          <ul id="display-values">
            <li>{displayValues[0]}</li>
          </ul>

        </div>
        <h2>{items[1].fields.articleDescription.content[4].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start"}}>
          <ul id="camera-keys">
            {kameraKeys.map((item,id) =>{
              return <li>{item }:</li>
            })}
          </ul>
          <ul id="camera-values">
            <li>{cameraValues[1]}</li>
            <li>{cameraValues[2]}</li>

          </ul>
         

        </div>
        <h2>{items[1].fields.articleDescription.content[6].content[0].value}</h2>
        <div style={{display:"flex", textAlign:"start"}}>
          <ul id="display-keys">
            {hardwareKeys.map((item,id) =>{
              return <li>{item}:</li>
            })}
          </ul>
        </div>
        <h2>{items[0].fields.articleDescription.content[8].content[0].value}</h2>
        <h3>{items[item].fields.articleDescription.content[9].content[0].content[0].content[0].value}</h3>
        <h2>{items[item].fields.conclusion.content[0].content[0].value}</h2>
        <p>{items[item].fields.conclusion.content[1].content[0].value}</p>
        <br></br>
        <a target="_blank" href={items[0].fields.linkToWebsite}>Link</a>
        <h4>Ranking:{items[item].fields.pricePerformance}/5</h4>
      </div>
     )}
  </div>
)
}
}

export default Ranking



