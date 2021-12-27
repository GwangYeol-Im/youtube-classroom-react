import { Global, css } from '@emotion/react';

import Layout from 'components/Layout';
import React from 'react';
import YoutubeClassroom from 'containers/YoutubeClassroom';
import normalize from 'emotion-normalize';

const App = () => (
  <>
    <Global
      styles={css`
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
      `}
    />
    <Layout>
      <YoutubeClassroom />
    </Layout>
  </>
);

export default App;
