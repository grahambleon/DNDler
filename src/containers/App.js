import React, { Component } from 'react';
import styled from 'styled-components';
import titleBackground from '../assets/titlebackground.png'
import PartyContainer from './PartyContainer.js'
import Button from '../components/Button.js'
import CharacterSheet from '../components/CharacterSheet.js'

const StyledTitle = styled.div`
  text-align: center;
  background-image: url(${titleBackground});
  margin: -20px;
  padding-top: 50px;
  padding-bottom: 40px;
  font-size: 36px;
  box-shadow: 0 0 8px 4px #FFFBDD inset;
  opacity: 0.9;
`
const StyledBody = styled.div`
  text-align: center;
  margin: 50px;
`

class App extends Component {
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
    return (
      <>
        <StyledTitle>
          WELCOME TO THE DNDLER
        </StyledTitle>
        <StyledBody>
          {this.state.clicked?(
            <PartyContainer party={this.state.party}/>
          ):('Roll the dice and choose your fate...')}
          <div>
            <label htmlFor={'partySize'}>Party size: </label>
            <select id={'partySize'} onChange={this.handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <Button onClick={this.roll}/>
        </StyledBody>
      </>
    );
  }
}

export default App;
