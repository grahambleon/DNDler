import React, { Component } from 'react';
import styled from 'styled-components';
const sample = require('lodash.sample');

const StyledSheet = styled.div`
  text-align: center;
  margin: 10px;
`

class CharacterSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      race: '',
      class: '',
      background: ''
    }
    this.rollCharacter = this.rollCharacter.bind(this)
  }

  componentDidMount() {
    this.rollCharacter()
  }

  rollCharacter() {
    const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling','Half-Orc', 'Human', 'Tiefling']
    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk','Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    const backgrounds = ['Acolyte', 'Charlatan', 'Criminal/Spy', 'Entertainer','Folk Hero', 'Gladiator', 'Guild Artisan/Guild Merchant', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin']

    this.setState({
      race: sample(races),
      class: sample(classes),
      background: sample(backgrounds)
    })
  }

  render() {
    return(
      <StyledSheet>{this.state.race}, {this.state.class}, {this.state.background}</StyledSheet>
    )
  }
}

export default CharacterSheet;
