import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';

const MonitoringPeriod: React.FC = () => {

  return (
    <Styled>
      <h4>Monitoring Period</h4>
      <div className="button-group">
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
        <Button>Year</Button>
      </div>
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
  .button-group {
    display: inline-block;
    > button {
      margin-left: 0px;
      :first-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right-width: 1px;
      }
      :not(:first-child) {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left-width: 1px;
      } 
      :not(:last-child){
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right-width: 1px;
      }
    }
  }
  > button {
    margin-left: 14px;
  }
`