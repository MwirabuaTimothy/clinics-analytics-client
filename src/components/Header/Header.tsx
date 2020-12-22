import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled'
import { ReactComponent as Plus } from '../../icons/plus.svg';

const Header: React.FC = () => {

  return (
    <Container className="u-full-width">
      <Btn>Add Assessment 
        <Plus className="icon plus" stroke="#999" fill="none" width="24" height="24"/>
      </Btn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #fff;
  height: 80px;
  padding: 20px;
`

const Btn = styled(Button)`
  width: 200px;
  text-align: left;
  > svg{
    top: 9px;
    right: 8px;
  }
`
