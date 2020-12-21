import React from 'react';
import { useGetClinicsQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading, error } = useGetClinicsQuery();
  if (loading) {
    return <div>Loading</div>;
  }
  
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data)
  return <div>yo</div>;
};

export default App;
