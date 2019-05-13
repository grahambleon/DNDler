import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.js'
const sample = require('lodash.sample');

const StyledSheet = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 10%;
  width: 60%;
  padding: 2%;
  background-color: rgba(160, 82, 44, .7);
  box-shadow: 3px 3px 5px 8px rgba(160, 82, 44, .7);
  & > span {
    display: block;
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

    const getName = () => {
      //since the drycode names api has separate api endpoints for male/female names,
      //we flip a coin here to see which one you get.
      const coinFlip = Math.floor(Math.random() * 2)
      const gender = coinFlip? "boy_names" : "girl_names"
      fetch(`https://tranquil-oasis-13767.herokuapp.com/http://names.drycodes.com/1?nameOptions=${gender}`)
        .then(response => response.json())
        .then(body => console.log(body[0].replace('_', ' ')))
    }
    getName()

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
      <>
        <StyledSheet>
          <span>Race: {this.state.race}</span>
          <span>Class: {this.state.class}</span>
          <span>Background: {this.state.background}</span>
          <span>Stats: {statList}</span>
        </StyledSheet>
        <Button onClick={this.rollCharacter} />
      </>
    )
  }
}

export default CharacterSheet;
