import styled from 'styled-components'

export const Button = styled.button`
  border-width: 2px;
  border-color: #ddd;
  height: 48px;
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
`