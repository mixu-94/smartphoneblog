import React from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'
import { convertLength } from '@mui/material/styles/cssUtils'

const Ranking = () => {

   const URL_SMARTPHONES = "http://cdn.contentful.com/spaces/xwxqqpx0he6y/entries?access_token=2ez5kqa9TZOM-3B_THRj0kQkOUwTyCCf24WldszChbc&select=fields.title&content_type=article"
    // const {data: smartphone, loading, error} = useFetch()
    
    // const TEST_URL = "https://v2.jokeapi.dev/joke/Any"

  //    const {data, loading, error } =  useFetch(URL_SMARTPHONES)

  //   if (data) {
  //   const fields = data.items
    
  //   fields.map((item) => {
  //     console.log("aus map" ,item.fields.title)
  //   })
  // }

  //   if (loading) return <h1> LOADING ....</h1>
  return (
    <div>Ranking
    
    </div>
  )
}

export default Ranking