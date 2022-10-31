import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      }). finally(() => {
        setLoading(false)
      })

    //   fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      }). finally(() => {
        setLoading(false)
      })
  }

  return {data, loading, error, refetch}                 

}


export default useFetch;
