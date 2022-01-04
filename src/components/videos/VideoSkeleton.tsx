import React from 'react';
import colors from 'constants/color';
import styled from '@emotion/styled';

const VideoSkeleton = () => (
  <Container>
    <Thumbnail />
    <Detail>
      <Title />
      <ChannelTitle />
    </Detail>
  </Container>
);

const Container = styled.div`
  width: 320px;
`;

const Thumbnail = styled.div`
  height: 180px;
  background-color: ${colors.grey300};
`;

const Detail = styled.div`
  margin-top: 0.7rem;
  text-align: initial;
`;

const Title = styled.div`
  margin-bottom: 0.5rem;
  width: 300px;
  height: 1rem;
  background-color: ${colors.grey300};
`;

const ChannelTitle = styled.div`
  font-size: 0.8rem;
  width: 200px;
  height: 0.8rem;
  background-color: ${colors.grey300};
`;

export default VideoSkeleton;
