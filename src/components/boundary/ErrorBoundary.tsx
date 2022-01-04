import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ({ error }: { error: Error }) => ReactNode;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  public render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return fallback({ error });
    }

    return children;
  }
}

export default ErrorBoundary;
