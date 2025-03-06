import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  let wrapper;
  const markAsReadMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <NotificationItem
        id={1}
        type="default"
        value="New course available"
        markAsRead={markAsReadMock}
      />
    );
  });

  it('calls markAsRead with the right ID when clicked', () => {
    wrapper.simulate('click'); // Simulate a click
    expect(markAsReadMock).toHaveBeenCalledWith(1); // Verify markAsRead was called with id 1
  });
});