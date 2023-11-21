import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetch = (question) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    async function fetchData() {
      await axios.post("http://localhost:3001/api", { prompt: question })
      .then(response => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return [data, loading];
  };
  