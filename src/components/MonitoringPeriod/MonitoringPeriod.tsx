import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { ReactComponent as Range } from '../../icons/dates.svg';
import { startOfDay, endOfDay, add } from 'date-fns';


interface Props {
  setDateRange: (start: Date, end: Date) => void;
  startDate: number;
  endDate: number;
}

const MonitoringPeriod: React.FC<Props> = (props) => {

  const setDay = () => {
    let start = startOfDay(new Date())
    let end = endOfDay(new Date())
    props.setDateRange(start, end)
  }
  const setWeek = () => {
    let now = new Date()
    let start = add(now, {
      weeks: -1,
    })
    props.setDateRange(start, now)
  }
  const setMonth = () => {
    let now = new Date()
    let start = add(now, {
      months: -1,
    })
    props.setDateRange(start, now)
  }
  const setYear = () => {
    let now = new Date()
    let start = add(now, {
      years: -1,
    })
    props.setDateRange(start, now)
  }

  return (
    <Styled>
      <h4>Monitoring Period</h4>
      <div className="button-group">
        <Button onClick={setDay}>Day</Button>
        <Button onClick={setWeek}>Week</Button>
        <Button onClick={setMonth}>Month</Button>
        <Button onClick={setYear}>Year</Button>
      </div>
      <DateRangePicker>
        <Range className="icon dots" fill="#666" width="32" height="32"/>
        <Flatpickr 
          value={[props.startDate, props.endDate]} 
          options={{
            mode: "range",
            minDate: "2019-12-01",
            maxDate: "2021-01-31",
            dateFormat: "d M Y",
            onClose: function(selectedDates, dateStr, instance) { // allow selection of the same date range
              let d1 = selectedDates[0].getTime()
              let d2 = selectedDates[1].getTime()
              if(d1 === d2){
                var start = startOfDay(selectedDates[0]);
                var end = endOfDay(selectedDates[0]);
                instance.setDate([start, end], true);
              }
            }
          }}
          onChange={date => props.setDateRange(date[0], date[1])}
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