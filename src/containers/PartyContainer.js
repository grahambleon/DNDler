import React from 'react';
import styled from 'styled-components';

const StyledSmallPartyContainer = styled.div`
  margin: auto;
`

const StyledLargePartyContainer = styled.div`
  margin: auto;
  &::nth-child(even){
    float: left;
  }
  &::nth-child(odd){
    float: right;
  }
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
