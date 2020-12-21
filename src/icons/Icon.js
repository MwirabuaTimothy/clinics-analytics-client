import React from 'react';
import styled from 'styled-components'

const Icon: React.FC = (props) => {
  return (
    <Img src={props.src} className={props.className} alt={props.alt} fill="#4e1ed4" />
  );
};

const Img = styled.img`
  width: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  display: inline-flex;
  cursor: pointer;
`;

export default Icon;

