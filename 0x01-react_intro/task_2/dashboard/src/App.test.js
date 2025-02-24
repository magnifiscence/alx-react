import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  // Test 1: App renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: App renders a div with the class App-header
  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  // Test 3: App renders a div with the class App-body
  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  // Test 4: App renders a div with the class App-footer
  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});