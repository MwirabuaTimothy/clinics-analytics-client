import React, { useState } from 'react';
import styled from 'styled-components'
import { Button, Title } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';
import { useGetClinicsQuery } from "../../generated/graphql";

interface Props {
  setClinic: (clinicId:string) => void; 
  startDate: number;
  endDate: number;
}

const ClinicsNav: React.FC<Props> = (props) => {
  
  const [active, setActive] = useState('0') 

  let { data, loading, error } = useGetClinicsQuery({ 
    variables: {
      startDate: props.startDate,
      endDate: props.endDate
    }
  });

  if (loading) {
    return <Styled>
      <Title>Visits</Title>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Button key={i} >
          <span>{ i }</span>
          <span>Loading...</span>
          <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
        </Button>
      ))}
    </Styled>
  }
  
  if (error) {
    return <div>{error.message}</div>;
  }
  
  const clinics = data?.clinics;

  return (
    <Styled>
      <Title>Visits</Title>
      {clinics?.map(clinic => (
        <Button key={clinic.id} className={clinic.id === active ? "active" : ''} onClick={() => props.setClinic(clinic.id)}>
          <span>{ clinic.visitsCount }</span>
          <span>{ clinic.name }</span>
          <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
        </Button>
      ))}
    </Styled>
  );
};

export default ClinicsNav;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
  > button {
    width: 100%;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 25px;
    text-align: left;
    :active,
    :focus {
      background-color: #4e1ed4;
      border-color: #4e1ed4;
      color: #fff;
      > svg circle {      
        fill: #fff;
      }
      :hover {
        background-color: #5e3fb3;
      }
      > span:first-child {
        color: #fff;
      }
    }
    > span:first-child {
      margin-right: 10px;
      color: #4e1ed4;
    }
  }
`