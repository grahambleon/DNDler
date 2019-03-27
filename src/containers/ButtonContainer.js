import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button.js'

const StyledButtonContainer = styled.div`
  text-align: center;
  margin: 10px;
`

class ButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  render() {
    return(
      <StyledButtonContainer>
        <Button />
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
