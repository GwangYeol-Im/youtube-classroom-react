import React from 'react';
import colors from 'constants/color';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => <Container>{children}</Container>;

const Container = styled.div`
  max-width: 676px;
  margin: 0 auto;
  height: 100%;
  background-color: ${colors.background};
`;

export default Layout;
