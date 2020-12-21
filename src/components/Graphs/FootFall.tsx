import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';

const FootFall: React.FC = () => {

  return (
    <Styled className="four columns">
      <h4>Foot Fall</h4>
    </Styled>
  );
};

export default FootFall;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
`