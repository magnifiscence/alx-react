import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
  });

  it('does not rerender when updating props with the same list', () => {
    // Spy on the render method
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    // Update props with the same list
    wrapper.setProps({ listNotifications: listNotifications });

    // Ensure render was not called again
    expect(renderSpy).toHaveBeenCalledTimes(1);

    // Clean up the spy
    renderSpy.mockRestore();
  });

  it('rerenders when updating props with a longer list', () => {
    // Spy on the render method
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    // Create a longer list
    const longerListNotifications = [
      ...listNotifications,
      { id: 3, type: 'urgent', value: 'New notification' },
    ];

    // Update props with the longer list
    wrapper.setProps({ listNotifications: longerListNotifications });

    // Ensure render was called again
    expect(renderSpy).toHaveBeenCalledTimes(2);

    // Clean up the spy
    renderSpy.mockRestore();
  });
});