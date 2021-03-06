import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EznymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({adapter: new EznymeAdapter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);  
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
} );
test('renders increment button', ()=>{
  const wrapper = shallow(<App/>);  
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});
test('renders counter display', ()=> {
  const wrapper = shallow(<App/>);  
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () =>{

})