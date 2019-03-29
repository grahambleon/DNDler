import React from 'react';
import styled from 'styled-components';
import d20 from '../assets/d20.png';

const StyledButton = styled.img`
  text-align: center;
  margin: 10px;
  width: 16vw;
`

const Button = (props) => {
  return(
    <StyledButton
      src={d20}
      onClick={props.startCharacterRoll}
    />
  )
}

export default Button;
