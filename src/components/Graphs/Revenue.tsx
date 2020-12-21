import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';

const Revenue: React.FC = () => {

  return (
    <Styled className="four columns">
      <h4>Revenue</h4>
    </Styled>
  );
};

export default Revenue;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
`