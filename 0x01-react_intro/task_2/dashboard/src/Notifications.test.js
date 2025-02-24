import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  // Test 1: Notifications renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
  });

  // Test 3: Notifications renders the text "Here is the list of notifications"
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});