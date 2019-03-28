import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CharacterSheet from './CharacterSheet';

it('renders', () => {
  shallow(<CharacterSheet />)
})
