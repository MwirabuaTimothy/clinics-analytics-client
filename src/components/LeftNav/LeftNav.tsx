import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';
import folder from '../../svg/folder.svg';
import activity from '../../svg/activity.svg';
import chat from '../../svg/chat.svg';
import sliders from '../../svg/sliders.svg';

const LeftNav: React.FC = () => {

  return (
    <$LeftNav className="one column">
      <Img src={folder} className="folder" alt="folder" />
      <Img src={activity} className="activity active" alt="activity" />
      <Img src={chat} className="chat" alt="chat" />
      <Img src={sliders} className="sliders" alt="sliders" />
    </$LeftNav>
  );
};

export default LeftNav;

const $LeftNav = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Img = styled.img`
  width: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  display: inline-flex;
  cursor: pointer;
`
