import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  text-align: center;
  margin: 10px;
`

class ButtonContainer extends Component {
  render() {
    return(
      <StyledButtonContainer>
        [BUTTON]
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
