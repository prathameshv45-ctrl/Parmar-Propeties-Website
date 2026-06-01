import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return (
        fallback ?? (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--pp-primary)' }}>
              Something went wrong.
            </h2>
            {error && <pre className="text-sm" style={{ color: 'var(--pp-text-muted)' }}>{error.message}</pre>}
          </div>
        )
      );
    }

    return children;
  }
}
