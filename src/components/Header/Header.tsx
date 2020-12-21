import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';
import { Button } from '../../css/styled'
import { ReactComponent as Plus } from '../../icons/plus.svg';

const Header: React.FC = () => {

  return (
    <Container className="u-full-width">
      <Button>Add Assessment 
        <PlusIcon className="icon plus" stroke="#999" fill="none" width="24" height="24"/>
      </Button>
    </Container>
  );
};

export default Header;

const PlusIcon = styled(Plus)`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: -6px;
  margin-right: -10px;
  margin-left: 8px;
`

const Container = styled.div`
  padding: 20px;
`