import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EznymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({adapter: new EznymeAdapter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);  
  const appComponent = wrapper.find("['data-test='component-app']")
} );
test('renders increment button', ()=>{

});

test('renders counter display', ()=> {

});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () =>{
  
})