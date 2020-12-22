import React from 'react';
import styled from 'styled-components'

const StaffTable: React.FC = () => {

  return (
    <Styled>
      <h4>StaffTable</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dave Gamache</td>
            <td>26</td>
            <td>Male</td>
            <td>San Francisco</td>
          </tr>
          <tr>
            <td>Dwayne Johnson</td>
            <td>42</td>
            <td>Male</td>
            <td>Hayward</td>
          </tr>
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