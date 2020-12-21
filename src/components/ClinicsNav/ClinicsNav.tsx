import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';
import { Button } from '../../css/styled';

const ClinicsNav: React.FC = () => {

  return (
    <Styled>
      <h4>Visits</h4>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
      <Button>Clinics Nav</Button>
    </Styled>
  );
};

export default ClinicsNav;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
  & > button {
    width: 100%;
    margin-bottom: 10px; 
  }
`