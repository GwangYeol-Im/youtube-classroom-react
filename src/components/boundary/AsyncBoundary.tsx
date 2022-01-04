import React, { ComponentProps, ReactNode, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface Props {
  children: ReactNode;
  pendingFallback: ComponentProps<typeof Suspense>['fallback'];
  rejectedFallback: ComponentProps<typeof ErrorBoundary>['fallback'];
}

const AsyncBoundary = ({
  children,
  pendingFallback,
  rejectedFallback,
}: Props) => (
  <ErrorBoundary fallback={rejectedFallback}>
    <Suspense fallback={pendingFallback}>{children}</Suspense>
  </ErrorBoundary>
);

export default AsyncBoundary;
