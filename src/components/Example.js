import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const Example = () => {
  const [data, loading] = useFetch("What's the weather like?");
  console.log(data)
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (data.error) {
    return <div>Error: {data.error.message}</div>; // Assume error object has message property containing error details
  }
  return (
    <div>
      <h1>API Data</h1>
      {loading ? "Loading..." : data}
    </div>
  );
};