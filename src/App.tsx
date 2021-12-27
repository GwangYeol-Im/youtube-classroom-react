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
      `}
    />
    <Layout>
      <YoutubeClassroom />
    </Layout>
  </>
);

export default App;
