import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button.js'
import CharacterSheet from '../components/CharacterSheet.js'

const StyledButtonContainer = styled.div`
  text-align: center;
  margin: 50px;
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
              Roll the dice and choose your fate...
            </Instructions>
            <Button onClick={this.startCharacterRoll}/>
          </>
        )}
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
