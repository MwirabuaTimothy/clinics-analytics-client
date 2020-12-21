import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';

const PatientSatisfaction: React.FC = () => {

  return (
    <Styled className="four columns">
      <h4>Patient Satisfaction</h4>
    </Styled>
  );
};

export default PatientSatisfaction;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
`