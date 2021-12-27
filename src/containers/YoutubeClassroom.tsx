import React, { useState } from 'react';

import Youtube from '../assets/images/youtube.png';
import styled from '@emotion/styled';

const YoutubeClassroom = () => {
  const { watchMode, setWatchMode } = useYoutubeClassroom();

  return (
    <Container>
      <Title>
        <YoutubeIcon src={Youtube} />
        나만의 유튜브 강의실
      </Title>
      <Menu>
        <VideoFilter>
          <button type="button" onClick={() => setWatchMode('toWatch')}>
            나중에 볼 동영상
          </button>
          <button type="button" onClick={() => setWatchMode('watched')}>
            시청한 동영상
          </button>
        </VideoFilter>
        <button type="button">동영상 검색</button>
      </Menu>
      <VideoList>{watchMode}</VideoList>
    </Container>
  );
};

type WatchState = 'toWatch' | 'watched';

const useYoutubeClassroom = () => {
  const [watchMode, setWatchMode] = useState<WatchState>('toWatch');

  return { watchMode, setWatchMode };
};

const Container = styled.main`
  padding: 1rem 0;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
`;

const YoutubeIcon = styled.img`
  height: 2.4375rem;
`;

const Menu = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  height: 3rem;
`;

const VideoFilter = styled.div`
  & > * {
    margin: 0 0.5rem;
  }
`;

const VideoList = styled.ul``;

/**
 * Title
 * VideoFilter
 * VideoSearch
 * SavedVideoList (watched: bool)
 */

export default YoutubeClassroom;
