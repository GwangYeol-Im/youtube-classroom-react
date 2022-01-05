import React, { useContext, useState } from 'react';

import { ModalContext } from 'providers/ModalProvider';
import VideoSearchForm from './VideoSearchForm';
import Youtube from 'assets/images/youtube.png';
import styled from '@emotion/styled';

type WatchState = 'toWatch' | 'watched';

const YoutubeClassroom = () => {
  const { watchMode, setWatchMode, openModal } = useYoutubeClassroom();

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
        <button type="button" onClick={() => openModal(<VideoSearchForm />)}>
          동영상 검색
        </button>
      </Menu>
      <VideoList>{watchMode}</VideoList>
    </Container>
  );
};

const useYoutubeClassroom = () => {
  const [watchMode, setWatchMode] = useState<WatchState>('toWatch');
  const { openModal } = useContext(ModalContext);

  return { watchMode, setWatchMode, openModal };
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

export default YoutubeClassroom;
