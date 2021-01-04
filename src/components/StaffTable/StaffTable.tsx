import React from 'react';
import styled from 'styled-components'
import { useGetStaffsQuery } from "../../generated/graphql";
import LineGraph from '../Graphs/LineGraph';


interface Props {
  startDate: number;
  endDate: number;
}

const StaffTable: React.FC<Props> = (props) => {
  
  let { data, error } = useGetStaffsQuery({ 
    variables: {
      startDate: props.startDate,
      endDate: props.endDate
    }
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if(data) {

    const staffs = data?.staffs;
  
    const format:any = (str:string) => {
      if(str[0] == '+'){
        return <Positive>&#9650; {str}</Positive>
      }
      return <Negative>&#9660; {str}</Negative>
    }
  
    return (
      <Styled>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Staff Name</th>
              <th colSpan={2}>Efficiency Delta</th>
              <th colSpan={2}>NPS Delta</th>
              <th>Efficiency</th>
              <th>Reported Issues</th>
            </tr>
          </thead>
          <tbody>
            {staffs?.map(staff => (
              <tr key={staff.rank}>
                <td>{staff.rank}</td>
                <td><Name>{staff.name}</Name></td>
                <td><b>{staff.efficiency_delta1}</b></td>
                <td>{format(staff.efficiency_delta2)}</td>
                <td><b>{staff.nps_delta1}</b></td>
                <td>{format(staff.nps_delta2)}</td>
                <td><Txt>{staff.efficiency + "%"}</Txt> <LineGraph filled={staff.efficiency + "%"}/></td>
                <td><Txt>{staff.reported_issues}</Txt> <LineGraph filled={staff.reported_issues*10 + "%"}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styled>
    );
  }
  // Loading state...
    return (
      <Styled>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Staff Name</th>
              <th colSpan={2}>Efficiency Delta</th>
              <th colSpan={2}>NPS Delta</th>
              <th>Efficiency</th>
              <th>Reported Issues</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map(i => (
              <tr key={i}>
                <td>{i}</td>
                <td><Name>...</Name></td>
                <td><b>...</b></td>
                <td>...</td>
                <td><b>...</b></td>
                <td>...</td>
                <td><Txt>%</Txt> <LineGraph filled="50%"/></td>
                <td><Txt>...</Txt> <LineGraph filled="10%"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styled>
    );
};

export default StaffTable;


const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  box-sizing: border-box;
  & > table {
    width: 100%;
    td {
      padding: 4px 15px;
      color: #aaa;
    }
    b {
      color: #666
    }
  }
`
const Name = styled.span`
  color: #4e1ed4;
`
const Txt = styled.span`
  margin-right: 20px;
  font-weight: 600;
  color: #666;
`
const Positive = styled.span`
  color: green;
`
const Negative = styled.span`
  color: red
`