import React from 'react';
import { useGetVisitsQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading, error } = useGetVisitsQuery({ 
    variables: {
      take: 5,
      skip: 0,
      orderBy: "patient",
      ascending: false,
      page: 3,
      clinicId: 1,
      issueId: 3,
      startDate: 1577750400000,
      endDate: 1579000000000
    }
  });
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
