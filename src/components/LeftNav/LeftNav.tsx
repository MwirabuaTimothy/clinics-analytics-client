import React from 'react';
import styled from 'styled-components'
import '../../css/skeleton.css';
import folder from '../../icons/folder.svg';
import activity from '../../icons/activity.svg';
import chat from '../../icons/chat.svg';
import sliders from '../../icons/sliders.svg';
import Icon from '../../icons/Icon';

const LeftNav: React.FC = () => {

  return (
    <$LeftNav className="one column">
      <Icon src={folder} className="folder" alt="folder" />
      <Icon src={activity} className="activity" alt="activity"  active={true} />
      <Icon src={chat} className="chat" alt="chat" />
      <Icon src={sliders} className="sliders" alt="sliders" />
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