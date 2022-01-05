import React, { memo } from 'react';

import { decode } from 'utils/code';
import styled from '@emotion/styled';

interface Props {
  video: SearchVideo;
}

const SearchedVideo = ({ video }: Props) => {
  const { snippet } = video;

  return (
    <a href="">
      <Container>
        <ImageWrapper>
          <Thumbnail src={snippet.thumbnails.medium.url} alt={snippet.title} />
        </ImageWrapper>
        <Detail>
          <Title>{decode(snippet.title)}</Title>
          <ChannelTitle>{snippet.channelTitle}</ChannelTitle>
        </Detail>
      </Container>
    </a>
  );
};

const Container = styled.div`
  width: 320px;
`;

const ImageWrapper = styled.div`
  height: 180px;
`;

const Thumbnail = styled.img`
  width: inherit;
  height: inherit;
`;

const Detail = styled.div`
  margin-top: 0.7rem;
  text-align: initial;
`;

const Title = styled.div`
  margin-bottom: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChannelTitle = styled.div`
  font-size: 0.8rem;
`;

export default memo(SearchedVideo);
