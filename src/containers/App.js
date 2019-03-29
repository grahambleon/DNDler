import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer.js'

const Title = styled.div`
  text-align: center;
  margin: 10px;
  font-family: 'Milonga', cursive;
  font-size: 36px;
`


class App extends Component {
  render() {
    return (
      <>
        <Title>
          WELCOME TO THE DNDLER
        </Title>
        <ButtonContainer />
      </>
    );
  }
}

export default App;
