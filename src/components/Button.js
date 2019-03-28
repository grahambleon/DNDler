import React from 'react';
import styled from 'styled-components';
import d20 from '../assets/d20.png'

const StyledButton = styled.img`
  text-align: center;
  margin: 10px;
  max-width: 190px;
`

const Button = (props) => {
  return(
    <StyledButton
      src={d20}
      alt='Choose your fate...'
      onClick={props.startCharacterRoll}
    />
  )
}

export default Button;
