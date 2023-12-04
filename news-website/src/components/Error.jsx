import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }

    // Render children components if there's no error
    return this.props.children;
  }
}

// Example usage:

class MyComponent extends React.Component {
  throwError() {
    throw new Error('This is a sample error.');
  }

  render() {
    return (
      <ErrorBoundary>
        {/* The code inside this boundary will be monitored for errors */}
        <div>
          <h1>Hello, React!</h1>
          <button onClick={this.throwError.bind(this)}>Simulate Error</button>
        </div>
      </ErrorBoundary>
    );
  }
}

export default MyComponent;