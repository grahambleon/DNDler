import React from 'react';
import styled from 'styled-components';

const StyledSmallPartyContainer = styled.div`
  margin: auto;
`

const StyledLargePartyContainer = styled.div`
  margin: auto;
  column-count: 2;
  width: 50%;
`

const PartyContainer = (props) => {
  let party;
  if (props.party.length > 3) {
    party = <StyledLargePartyContainer>{props.party}</StyledLargePartyContainer>
  } else {
    party = <StyledSmallPartyContainer>{props.party}</StyledSmallPartyContainer>
  }

  return(party)
}

export default PartyContainer;
