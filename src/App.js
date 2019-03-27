import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <StyledTitle>
        WELCOME TO THE DNDLER
      </StyledTitle>
    );
  }
}

export default App;
