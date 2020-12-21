import React from 'react';
import FootFall from './FootFall';
import PatientSatisfaction from './PatientSatisfaction';
import Revenue from './Revenue';
import styled from 'styled-components'
import '../../css/skeleton.css';

const Graphs: React.FC = () => {

  return (
    <Styled>
      <div className="row">
        <FootFall/>
        <PatientSatisfaction/>
        <Revenue/>
      </div>
    </Styled>
  );
};

export default Graphs;

const Styled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  box-sizing: border-box;
`