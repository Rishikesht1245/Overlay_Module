import React, { Component, ReactNode } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //   catch error
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    // if error render the error component
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
