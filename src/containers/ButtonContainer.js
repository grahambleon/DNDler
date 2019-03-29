import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button.js'
import CharacterSheet from '../components/CharacterSheet.js'

const StyledButtonContainer = styled.div`
  text-align: center;
  margin: 10px;
`
const Instructions = styled.div`
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
          <>
            <Instructions>
              -How to use the DNDler
            </Instructions>
            <Button startCharacterRoll={this.startCharacterRoll}/>
          </>
        )}
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
