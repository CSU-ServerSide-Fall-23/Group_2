import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}


class MyError extends React.Component {
  throwError() {
    throw new Error('This is a sample error.');
  }

  render() {
    return (
      <ErrorBoundary>
        <div>
          <button onClick={this.throwError.bind(this)}>Simulate Error</button>
        </div>
      </ErrorBoundary>
    );
  }
}

export default MyError;