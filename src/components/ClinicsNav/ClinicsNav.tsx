import { truncate } from 'fs';
import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';

const ClinicsNav: React.FC = () => {

  return (
    <Styled>
      <h4>Visits</h4>
      <Button className="active">
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/></Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <span>15</span>
        <span>Clinics Nav</span>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
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
    padding-left: 15px;
    padding-right: 25px;
    text-align: left;
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
      > span:first-child {
        color: #fff;
      }
    }
    > span:first-child {
      margin-right: 10px;
      color: #4e1ed4;
    }
  }
`