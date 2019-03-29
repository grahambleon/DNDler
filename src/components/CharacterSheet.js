import React, { Component } from 'react';
import styled from 'styled-components';
import d20 from '../assets/d20.png';
const sample = require('lodash.sample');

const StyledSheet = styled.div`
  text-align: center;
  margin: 10px;
`
const RerollButton = styled.img`
  width: 10vw;
  &:hover {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, .5);
  }
  &:active {
    background-color: rgba(140, 20, 252, .7);
    border-radius: 50%;
    box-shadow: 3px 3px 5px 6px rgba(140, 20, 252, .7);
  }
`

class CharacterSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      race: '',
      class: '',
      background: '',
      stats: []
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

    const rollStat = () => {
      const randomInt = () => Math.floor(Math.random()*6) + 1
      const stat = [randomInt(), randomInt(), randomInt(), randomInt()]
      stat.sort().shift()
      return(
        stat.reduce((a, b) => a + b)
      )
    }
    this.setState({
      race: sample(races),
      class: sample(classes),
      background: sample(backgrounds),
      stats: [rollStat(), rollStat(), rollStat(), rollStat(), rollStat(), rollStat()]
    })
  }

  render() {
    let i = 0
    const statList = this.state.stats.map((stat) => {
      i++
      if (i === 6) {
        return(`${stat}`)
      } else {
        return(`${stat}, `)
      }
    })

    return(
      <StyledSheet>
        <p>Race: {this.state.race}</p>
        <p>Class: {this.state.class}</p>
        <p>Background: {this.state.background}</p>
        <p>Stats: {statList}</p>
        <RerollButton src={d20} onClick={this.rollCharacter} />
      </StyledSheet>
    )
  }
}

export default CharacterSheet;
