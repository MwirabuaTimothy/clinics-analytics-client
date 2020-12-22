import React from 'react';
import FootFall from './FootFall';
import PatientSatisfaction from './PatientSatisfaction';
import Revenue from './Revenue';
import styled from 'styled-components'

const Graphs: React.FC = () => {

  return (
    <Styled>
      <FootFall/>
      <PatientSatisfaction/>
      <Revenue/>
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