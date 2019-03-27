import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.js'

it('renders', () => {
  shallow(<Button />)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
