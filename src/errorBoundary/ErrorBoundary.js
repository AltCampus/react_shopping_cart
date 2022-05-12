import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong. <br />
          Please Refresh the page
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
