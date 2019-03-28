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
    this.startCharacterRoll = this.startCharacterRoll.bind(this)
  }

  startCharacterRoll() {
    this.setState({
      clicked: true
    })
  }

  render() {
    return(
      <StyledButtonContainer>
        {this.state.clicked?(
          <CharacterSheet />
        ):(
          <Button startCharacterRoll={this.startCharacterRoll}/>
        )}
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
