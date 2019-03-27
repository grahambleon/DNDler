import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer.js'

const Title = styled.div`
  text-align: center;
  margin: 10px;
  font-family: 'Milonga', cursive;
  font-size: 36px;
`
const Instructions = styled.div`
  text-align: center;
  margin: 10px;
`

class App extends Component {
  render() {
    return (
      <>
        <Title>
          WELCOME TO THE DNDLER
        </Title>
        <Instructions>
          -How to use the DNDler
        </Instructions>
        <ButtonContainer />
      </>
    );
  }
}

export default App;
