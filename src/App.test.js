import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EznymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EznymeAdapter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  console.log(wrapper.debug());
} );