import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

// Mock console.log
const consoleLogSpy = jest.spyOn(console, 'log');

describe('WithLogging HOC', () => {
  afterEach(() => {
    consoleLogSpy.mockClear(); // Clear the console log spy after each test
  });

  it('logs mount and unmount messages for a pure HTML element', () => {
    // Wrap a pure HTML element (e.g., <p />) with WithLogging
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);

    // Check mount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check unmount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs mount and unmount messages for the Login component', () => {
    // Create a Login component
    const Login = () => <div>Login</div>;
    Login.displayName = 'Login';

    // Wrap the Login component with WithLogging
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    // Check mount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check unmount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});