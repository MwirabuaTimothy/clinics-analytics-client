import React from 'react';
import styled from 'styled-components'
import Icon from '../../icons/Icon';
import plus from '../../icons/plus.svg';
import '../../css/skeleton.css';

const Header: React.FC = () => {

  return (
    <div className="u-full-width">
      <Button>Add Assessment  <PlusIcon src={plus} className="plus" alt="plus" /></Button>
    </div>
  );
};

export default Header;

const Button = styled.button`
  &:hover {
    border-color: #4e1ed4;
    color: #4e1ed4;
    & > img{
      color: #4e1ed4;
    }
  }
`
const PlusIcon = styled(Icon)`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: -6px;
  margin-right: -10px;
  margin-left: 8px;
`
