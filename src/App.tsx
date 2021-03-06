import { Global, css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from 'components/Layout';
import { ModalProvider } from 'providers/ModalProvider';
import React from 'react';
import YoutubeClassroom from 'containers/YoutubeClassroom';
import normalize from 'emotion-normalize';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <Global styles={globalStyles} />
      <Layout>
        <YoutubeClassroom />
      </Layout>
    </ModalProvider>
  </QueryClientProvider>
);

const globalStyles = css`
  ${normalize}

  * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
    color: #191f28;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default App;
