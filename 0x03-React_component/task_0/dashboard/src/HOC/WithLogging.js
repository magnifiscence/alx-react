import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the displayName for debugging purposes
  WithLoggingComponent.displayName = `WithLogging(${name})`;

  return WithLoggingComponent;
};

export default WithLogging;