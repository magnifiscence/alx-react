import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly with an empty list or no listNotifications prop', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
  });

  it('renders the correct number of NotificationItem elements', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });
});