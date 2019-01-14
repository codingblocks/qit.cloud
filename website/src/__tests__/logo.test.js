import React from 'react'
import { shallow, mount } from 'enzyme';
//import {divBreakdown, renderDiv, Header } from '../setup'
import {Logo} from '../components/Header/Logo'
import 'jest-dom/extend-expect'

it('should render correctly with no props', () => {
  const component = shallow(<Logo/>);
  
  expect(component).toMatchSnapshot();
});
