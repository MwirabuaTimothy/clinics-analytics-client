import styled from 'styled-components'

export const Title = styled.p`
  color: #aaa;
  font-size: 14px;
  text-transform: uppercase;
`

export const Button = styled.button`
  font-size: 14px;
  border-width: 2px;
  border-color: #ddd;
  height: 48px;
  position: relative;
  :active,
  :hover {
    border-color: #4e1ed4;
    border-width: 2px;
    color: #4e1ed4;
    > svg line {      
      stroke: #4e1ed4;
    }
    > svg circle {      
      fill: #4e1ed4;
    }
  }
  > svg {      
    position: absolute;
    top: 7px;
    right: 0px;
  }
`