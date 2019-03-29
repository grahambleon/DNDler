import React, { Component } from 'react';
import styled from 'styled-components';
import titleBackground from '../assets/titlebackground.png'
import ButtonContainer from './ButtonContainer.js'

const Title = styled.div`
  text-align: center;
  background-image: url(${titleBackground});
  margin: -20px;
  padding-top: 50px;
  padding-bottom: 40px;
  font-size: 36px;
  box-shadow: 0 0 8px 4px #FFFBDD inset;
  opacity: 0.9;
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
