import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';

const MonitoringPeriod: React.FC = () => {

  return (
    <Styled>
      <h4>Monitoring Period</h4>
      <Button>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
      <Button>Year</Button>
      <Button>Date Range</Button>
    </Styled>
  );
};

export default MonitoringPeriod;

const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  box-sizing: border-box;
  & > button {
    margin: 5px; 
  }
`