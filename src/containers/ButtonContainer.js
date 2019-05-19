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
      partySize: 1,
      party: []
    }
    this.roll = this.roll.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ partySize: event.target.value })
  }

  roll() {
    this.setState({
      clicked: true,
      party: Array.from({length: this.state.partySize}, (_, i) => <CharacterSheet key={Math.floor(Math.random()*1000)} />)
    })
  }

  render() {
    return(
      <StyledButtonContainer>
        <span>Party size: </span>
        <select onChange={this.handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        {this.state.clicked?(
          <>
            {this.state.party}
            <Button onClick={this.roll}/>
          </>
        ):(
          <>
            <Instructions>
              Roll the dice and choose your fate...
            </Instructions>
            <Button onClick={this.roll}/>
          </>
        )}
      </StyledButtonContainer>
    )
  }
}

export default ButtonContainer;
