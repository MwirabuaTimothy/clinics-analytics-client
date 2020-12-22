import React from 'react';
import styled from 'styled-components'
import { ReactComponent as Folder } from '../../icons/folder.svg';
import { ReactComponent as Activity } from '../../icons/activity.svg';
import { ReactComponent as Chat } from '../../icons/chat.svg';
import { ReactComponent as Sliders } from '../../icons/sliders.svg';

const LeftNav: React.FC = () => {

  return (
    <Container>
      <Folder className="icon folder" stroke="#999" fill="none" width="30" height="30"/>
      <Activity className="icon activity" stroke="#4e1ed4" fill="none" width="30" height="30" />
      <Chat className="icon chat" stroke="#999" fill="none" width="30" height="30"/>
      <Sliders className="icon sliders" stroke="#999" fill="none" width="30" height="30"/>
    </Container>
  );
};

export default LeftNav;

const Container = styled.div`
  position: fixed;
  width: 80px;
  @media (max-width: 900px) {
    width: 50px;
  }
  background-color: #fff;
  border-right: 2px solid #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin: 0 auto;
    padding-top: 18px; 
    padding-bottom: 18px; 
    cursor: pointer;
    :hover path {
      stroke: #4e1ed4;
    }
  }
`