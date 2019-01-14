import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import Index from '../components/Main/index'
import App from '../App'
import {divBreakdown, renderDiv } from '../setup'
import {Search, SearchWithRouter} from '../components/Header/Search'


// replacement test while real tests are not written

window.it('should run smoke test', () => console.log('write real tests'))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
  ReactDOM.unmountComponentAtNode(div)
  })

describe('Opening index', () =>{
  beforeAll(() => {
    renderDiv
  })

  afterAll(() =>{
    divBreakdown
  })

  it('Is an queue empty message', () => {
    expect.stringContaining('Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!');
  })

  it('Is a search box placeholder', () =>{
    expect.stringContaining('Search for a great podcast here!');
  })

  it('Header contains search and search with router', () => {
    expect.objectContaining({Search});
    expect.objectContaining({SearchWithRouter});
  })
  
})

it('The Qit logo opens the about page', () => {
  const component = shallow(<App />);
  component
    .find('logo#qit')
    .simulate('click');
  expect(component).toMatchSnapshot();
  
});
