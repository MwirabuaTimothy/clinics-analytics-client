import { truncate } from 'fs';
import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';

const ClinicsNav: React.FC = () => {

  return (
    <Styled>
      <h4>Visits</h4>
      <Button className="active">Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>Clinics Nav<Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
    </Styled>
  );
};

export default ClinicsNav;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
  > button {
    width: 100%;
    margin-bottom: 10px; 
    position: relative;
    height: 48px;
    > svg {      
      margin-top: 7px;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    :hover {
      & > svg circle {      
        fill: #4e1ed4;
      }
    }
    &.active {
      background-color: #4e1ed4;
      border-color: #4e1ed4;
      color: #fff;
      > svg circle {      
        fill: #fff;
      }
      :hover {
        background-color: #5e3fb3;
      }
    }
  }
`