import React from 'react'
import './Ranking.css'
import useFetch from '../../constants/useFetch'

const Ranking = () => {

    const {data: smartphone, loading, error} = useFetch()
  return (
    <div>Ranking</div>
  )
}

export default Ranking