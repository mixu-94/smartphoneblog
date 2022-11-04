import { useEffect, useState } from "react";
import axios from "axios";



function useFetch(url){

  const [data, setData] = useState( null );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect( () => {

  if(!url) return;


  const fetchData = async () => {

  setLoading(true);

  const response = await fetch(url);
  const data = await response.json();

  setData(data);
  setLoading(false);

};

  fetchData();  

  
   /*   axios
      .get(url)
      .then((response) => {
        setLoading(true);
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      }). finally(() => {
        setLoading(false)
      })   */

    //   fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  


  }, [url]);

  return {data, loading, error}                 
}


export default useFetch;















/*    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      }). finally(() => {
        setLoading(false)
      })  */

    //   fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  


  /* const refetch = () => {
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
  } */
