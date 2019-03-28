import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button.js'
import CharacterSheet from '../components/CharacterSheet.js'

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
    this.showDndl = this.showDndl.bind(this)
  }

  showDndl() {
    this.setState({
      clicked: true
    })
  }

  render() {
    let shownComponent

    if (this.state.clicked) {
      shownComponent = <CharacterSheet />
    } else {
      shownComponent = <Button />
    }

    return(
      <StyledButtonContainer onClick={this.showDndl}>
        {shownComponent}
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
