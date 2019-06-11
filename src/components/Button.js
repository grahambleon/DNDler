import React from 'react';
import styled from 'styled-components';
import d20 from '../assets/d20.png';

const StyledButton = styled.img`
  text-align: center;
  margin: 10px;
  width: 12vw;
  &:hover {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, .5);
  }
  &:active {
    background-color: rgba(140, 20, 252, .7);
    border-radius: 50%;
    box-shadow: 3px 3px 5px 6px rgba(140, 20, 252, .7);
  }
`

const Button = (props) => {
  return(
    <div>
      <StyledButton
        src={d20}
        onClick={props.onClick}
      />
    </div>
  )
}

export default Button;
