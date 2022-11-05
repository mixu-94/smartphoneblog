import React from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'
import { convertLength } from '@mui/material/styles/cssUtils'

const Ranking = () => {
  const URL = "https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields.title,fields.articlePicture,fields.articleDescription,fields.pricePerformance,fields.conclusion,fields.linkToWebsite&content_type=article"

    //const {data: smartphone, loading, error} = useFetch(url)
    
    const { data, loading, error } = useFetch(URL)


    console.log(data);



if(data){ 
  if(loading){
    return <h1>Loading ...</h1>
  }
  if(error){
    <h1 style={{color:"red"}}>Error could not fetch Data</h1>
  }
  const fields = data.items ;
  const fields2 = data.includes;

  const fazit = fields[0].fields.conclusion.content[0].content[0].value;
  const articleDescription = data.items[0].fields.articleDescription.content[0].content[0].value;
  const fazitFull = fields[0].fields.conclusion.content[1].content[0].value

  const display = fields[1].fields.articleDescription.content[2].content[0].value
  const display2 = fields[0].fields.articleDescription.content[4].content[0].value

  const camera = fields[0].fields.articleDescription.content[6].content[0].value
  const software = fields[0].fields.articleDescription.content[8].content[0].value


  console.log(data.items[0].fields.articleDescription.content[0].content[0].value)
  console.log(fields[0].fields.conclusion.content[0].content[0].value)

  
  return (
    <div>
        {    
        fields.map(item => 

        <div id="inhalt" key={item.fields.index}>

          <h1  key={item.fields.title}> {item.fields.title}</h1>

          <img style={{height:"30vh"}} src={fields2.Asset[0].fields.file.url}></img>

          <h2  key={articleDescription}> {articleDescription}</h2>
          <p   key={item.fields.articleDescription.content[1].content[0].value}> {item.fields.articleDescription.content[1].content[0].value}</p>

          <ul style={{display:"flex" ,flexDirection:"column", textAlign:"center", listStyle:"none", marginLeft:"-50px"}}>

          <h2 key ={display.index}>{display}</h2>

            <li>{fields[0].fields.articleDescription.content[3].content[0].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[0].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[1].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[1].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[2].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[2].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[3].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[3].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[4].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[4].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[5].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[5].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[6].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[6].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[7].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[7].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[8].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[8].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[3].content[9].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[3].content[9].content[1].content[0].value}</li><br></br>

            <h3 key ={display2}>{display2}</h3>

            <li>{fields[0].fields.articleDescription.content[5].content[0].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[5].content[0].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[5].content[1].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[5].content[1].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[5].content[2].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[5].content[2].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[5].content[3].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[5].content[3].content[1].content[0].value}</li><br></br>

          <h2 key={camera.index}>{camera}</h2>
          
            <li>{fields[0].fields.articleDescription.content[7].content[0].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[0].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[1].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[1].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[2].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[2].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[3].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[3].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[4].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[4].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[5].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[5].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[6].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[6].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[7].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[7].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[8].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[8].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[9].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[9].content[1].content[0].value}</li><br></br>
            <li>{fields[0].fields.articleDescription.content[7].content[10].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[10].content[1].content[0].value}</li><br></br>

            <h2 key={software.index}>{software}</h2>

            <li>{fields[0].fields.articleDescription.content[7].content[10].content[0].content[0].value}:  <br></br>{fields[0].fields.articleDescription.content[7].content[10].content[1].content[0].value}</li><br></br>




          </ul>



          <h4  key={fazit}> {fazit}</h4>
          <p>{fazitFull}</p>

          <a target="_blank" href="{item.items[1].fields.linkToWebsite}">Link </a>
          <h2>Rating: {item.fields.pricePerformance}/5</h2>



        </div>

       )}
    </div>
  )
}
}

export default Ranking


