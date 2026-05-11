import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'var(--navy)',
            color: 'var(--white)',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚠️ Error</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--muted)' }}>
              Something went wrong. Please refresh the page or go back.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details
                style={{
                  textAlign: 'left',
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                  Error details (dev only)
                </summary>
                <pre
                  style={{
                    overflow: 'auto',
                    color: '#ff6b6b',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                  }}
                >
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={() => (window.location.href = '/')}
              style={{
                marginTop: '2rem',
                padding: '0.75rem 2rem',
                backgroundColor: 'var(--blue)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
