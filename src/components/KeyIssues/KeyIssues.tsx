import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';
import { Button } from '../../css/styled';

const KeyIssues: React.FC = () => {

  return (
    <Styled>
      <h4>Key Issues</h4>
      <Button>Key Issues</Button>
      <Button>Key Issues</Button>
      <Button>Key Issues</Button>
      <Button>Key Issues</Button>
      <Button>Key Issues</Button>
      <Button>Key Issues</Button>
    </Styled>
  );
};

export default KeyIssues;

const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  & > button {
    margin: 5px; 
  }
`