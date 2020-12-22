import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { ReactComponent as Range } from '../../icons/dates.svg';

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
      <DateRangePicker>
        <Range className="icon dots" fill="#666" width="32" height="32"/>
        <Flatpickr 
          value={[new Date('2019-12-10'), new Date('2020-01-10')]} 
          options={{
            mode: "range",
            minDate: "2019-12-01",
            maxDate: "today",
            dateFormat: "d M Y"
          }}
          onChange={date => {
            console.log('from', date[0]);
            console.log('to', date[1]) 
          }}
          />
      </DateRangePicker>
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
    @media (max-width: 1100px) {
      display: flex;
      width: 100%;
    }
    > button {
      margin-left: 0px;
      flex: 1;
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
  .flatpickr-input  {    
    height: 100%;
    width: 100%;
    padding-left: 55px;
    border: 2px solid #ddd;
  }
`
const DateRangePicker = styled.div`
  height: 48px;
  width: 250px;
  position: relative;
  display: inline-block;
  margin-left: 28px;
  @media (max-width: 1100px) {
    margin-left: 0;
    width: 100%;
  }
  > svg {
    top: 8px;
    left: 15px;
    position: absolute;
  }
  :hover {
    > input {
      border-color: #4e1ed4;
    }
    > svg rect {
      fill: #4e1ed4;
    }
  }
`