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
      clicked: false,
      partySize: 1
    }
    this.startCharacterRoll = this.startCharacterRoll.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ partySize: event.target.value })
  }

  startCharacterRoll() {
    this.setState({
      clicked: true
    })
  }

  render() {
    let party = new Array(this.state.partySize).fill(<CharacterSheet />)
    
    return(
      <StyledButtonContainer>
        {this.state.clicked?(
          party
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
