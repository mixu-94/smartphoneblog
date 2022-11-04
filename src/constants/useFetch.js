import { useEffect, useState } from "react";
import axios from "axios";



function useFetch(url){

  const [data, setData] = useState( null );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    getData()
  }, [url]);

  // const refetch = () => {
  //   setLoading(true);
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     }). finally(() => {
  //       setLoading(false)
  //     })
  // }

  const getData = async () => {
    setLoading(true);
    await axios
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

  return {data, loading, error}                 

}


export default useFetch;
