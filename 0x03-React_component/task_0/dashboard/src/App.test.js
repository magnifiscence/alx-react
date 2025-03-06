import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  const logOutMock = jest.fn();

  beforeEach(() => {
    // Shallow render the App component with the logOut mock
    shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore all mocks after each test
  });

  it('calls logOut and displays alert when Ctrl + h is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Simulate Ctrl + h keydown event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out'); // Verify alert was called
    expect(logOutMock).toHaveBeenCalled(); // Verify logOut was called
  });

  it('does not call logOut or alert when other keys are pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Simulate a different keydown event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'a' });
    document.dispatchEvent(event);

    expect(alertMock).not.toHaveBeenCalled(); // Verify alert was not called
    expect(logOutMock).not.toHaveBeenCalled(); // Verify logOut was not called
  });
});