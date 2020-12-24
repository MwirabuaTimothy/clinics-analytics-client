import React from 'react';
import Graph from './Graph';
import styled from 'styled-components'
import { useGetVisitsQuery } from "../../generated/graphql";
import { shuffle } from '../../utilities';

interface Props {
  startDate: number;
  endDate: number;
}

const Graphs: React.FC<Props> = (props) => {

  let { data, error } = useGetVisitsQuery({ 
    variables: {
      startDate: props.startDate,
      endDate: props.endDate,
      clinicId: 1,
      issueId: 3,
    }
  });
  
  if (error) {
    return <div>{error.message}</div>;
  }
  
  
  if (data) {
    
    const visits = data?.visits;
      
    // footfall graph
    let footfall:number[] =  [];

    let dailyCount:any = {};
    visits?.forEach(visit => {
      if (dailyCount[visit.time]){
        dailyCount[visit.time] ++
      }
      else {
        dailyCount[visit.time] = 1
      }
    })
    footfall =  Object.values(dailyCount);
    
    if(footfall.length === 1){ // its the same date
      footfall = [25, 36, 40, 35, 37, 47, 54] // mock visits per hour
    }

    let nps = shuffle(footfall)
    let revenue = shuffle(footfall)
    // console.log(footfall, nps, revenue)

    return (
      <Styled>
        <Graph
          title="Foot Fall"
          figure="13k"
          sub="Patients"
          data={footfall}
          color="#43d39e"
          trend={{
            textClass: 'text-success',
            icon: 'uil uil-arrow-up',
            value: '+0,2'
          }}/>
        <Graph
          title="Patient Satisfaction"
          figure="7.8"
          sub="NPS"
          data={nps}
          color="#ff0000"
          trend={{
            textClass: 'text-danger',
            icon: 'uil uil-arrow-up',
            value: '-0,1'
          }}/>
        <Graph
          title="Revenue"
          figure="4.2m"
          sub="Kenya Shillings"
          data={revenue}
          color="#43d39e"
          trend={{
            textClass: 'text-success',
            icon: 'uil uil-arrow-up',
            value: '+2,4'
          }}/>
      </Styled>
    );
  
  }

  // Loading state
  let footfall = [10, 10, 10, 10, 10] // dummy data
  let nps = shuffle(footfall)
  let revenue = shuffle(footfall)
  return (
    <Styled>
      <Graph
        title="Foot Fall"
        figure="13k"
        sub="Patients"
        data={footfall}
        color="#43d39e"
        trend={{
          textClass: 'text-success',
          icon: 'uil uil-arrow-up',
          value: '+0,2'
        }}/>
      <Graph
        title="Patient Satisfaction"
        figure="7.8"
        sub="NPS"
        data={nps}
        color="#ff0000"
        trend={{
          textClass: 'text-danger',
          icon: 'uil uil-arrow-up',
          value: '-0,1'
        }}/>
      <Graph
        title="Revenue"
        figure="4.2m"
        sub="Kenya Shillings"
        data={revenue}
        color="#43d39e"
        trend={{
          textClass: 'text-success',
          icon: 'uil uil-arrow-up',
          value: '+2,4'
        }}/>
    </Styled>
  );
};


export default Graphs;

const Styled = styled.div`
  width: 100%;
  margin-top: 30px;
  display: inline-block;
  box-sizing: border-box;
  & > * {
    width: 32%;
    margin-left: 2%;
    float: left;
    box-sizing: border-box;
    :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 1200px) {
    margin-right: 2%;
    & > * {
      width: 100%;
      margin-top: 30px;
      margin-left: 0;
      :first-child{
        margin-top: 0;
      }
    }
  }
`