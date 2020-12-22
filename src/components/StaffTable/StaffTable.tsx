import React from 'react';
import styled from 'styled-components'

import { useGetStaffsQuery } from "../../generated/graphql";
import LineGraph from '../Graphs/LineGraph';

const StaffTable: React.FC = () => {
  
  let { data, loading, error } = useGetStaffsQuery();

  if (loading) {
    return <div>Loading</div>;
  }
  
  if (error) {
    return <div>{error.message}</div>;
  }

  const staffs = data?.staffs;

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
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.efficiency_delta1}</td>
              <td>{staff.efficiency_delta2}</td>
              <td>{staff.nps_delta1}</td>
              <td>{staff.nps_delta2}</td>
              <td><Eff>{staff.efficiency}</Eff> <LineGraph width="150px" filled={staff.efficiency + "%"}/></td>
              <td>{staff.reported_issues}</td>
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
    width: 100%
  }
`
const Eff = styled.span`
  margin-right: 20px;
`