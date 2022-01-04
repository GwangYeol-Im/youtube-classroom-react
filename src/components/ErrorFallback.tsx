import React from 'react';

interface Props {
  error: Error;
}

const ErrorFallback = ({ error }: Props) => <div>{error.message}</div>;

export default ErrorFallback;
