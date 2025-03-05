import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold">Something went wrong 😢</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
