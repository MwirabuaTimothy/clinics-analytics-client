import React from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled'
import { ReactComponent as Plus } from '../../icons/plus.svg';
import LineGraph from '../Graphs/LineGraph';

const Header: React.FC = () => {

  return (
    <Container className="u-full-width">
      <Btn>Add Assessment 
        <Plus className="icon plus" stroke="#999" fill="none" width="24" height="24"/>
      </Btn>
      <Right>
        <Performance>
          <LineGraph filled="30%"/>
          <Stat>24k / 24k patients seen</Stat>
        </Performance>
        <Profile>
          <Name>Sandra Mamai</Name>
          <Email>smamai@accessafya.com</Email>
        </Profile>
        <Img src="./profile.png"/>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #fff;
  height: 90px;
  padding: 20px 40px;
`

const Btn = styled(Button)`
  width: 200px;
  text-align: left;
  > svg{
    top: 9px;
    right: 8px;
  }
`
const Right = styled.div`
  float: right;
`
const Performance = styled.div`
  display: inline-block;
  margin-right: 20px;
  width: 200px;
`
const Stat = styled.div`
  font-size: 14px;
`
const Profile = styled.div`
  display: inline-block;
  margin-right: 20px;
`
const Name = styled.div`
  font-weight: bold;
`
const Email = styled.div`
  font-size: 14px;
`
const Img = styled.img`
  float: right;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-top: -5px;
`