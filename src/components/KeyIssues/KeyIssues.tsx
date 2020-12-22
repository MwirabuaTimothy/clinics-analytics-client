import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';

const KeyIssues: React.FC = () => {

  return (
    <Styled>
      <h4>Key Issues</h4>
      <Button>
        <b>Key Issues Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <b>Key Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <b>Key Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <b>Key Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <b>Key Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
      <Button>
        <b>Key Issues</b>
        <small>Kosovo</small>
        <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
      </Button>
    </Styled>
  );
};

export default KeyIssues;

const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  > button {
    margin: 8px; 
    position: relative;
    text-align: left;
    padding: 5px 25px 5px 10px;
    min-width: 145px;
    height: auto;
    > b {
      display: block;
      font-size: 11px; 
      line-height: 20px;
    }
    > small {
      display: block;
      font-size: 8px; 
      line-height: 14px;
    }
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
  }
`