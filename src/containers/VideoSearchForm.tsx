import React, { FormEvent, useState } from 'react';

import AsyncBoundary from 'components/boundary/AsyncBoundary';
import ErrorFallback from 'components/ErrorFallback';
import SearchedVideo from 'components/videos/SearchedVideo';
import VideoSkeleton from 'components/videos/VideoSkeleton';
import colors from 'constants/color';
import { fetchYTBVideos } from 'remotes/video';
import { generateID } from 'hooks/useId';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';

const FETCH_VIDEO_COUNT = 10;

const VideoSearchForm = () => {
  const { keyword, setKeyword, query, search } = useVideoSearchForm();

  return (
    <Container>
      <SearchForm onSubmit={search}>
        <input
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>검색</button>
      </SearchForm>
      <AsyncBoundary
        pendingFallback={<VideoSkeletons />}
        rejectedFallback={({ error }) => <ErrorFallback error={error} />}
      >
        <SearchedVideos query={query} />
      </AsyncBoundary>
    </Container>
  );
};

const SearchedVideos = ({ query }: { query: string }) => {
  if (query === '') return null;

  const { data } = useQuery(['videos', query], () =>
    fetchYTBVideos(query, FETCH_VIDEO_COUNT)
  );

  return (
    <VideoList>
      {data?.items.map((video) => (
        <SearchedVideo key={video.id.videoId ?? generateID()} video={video} />
      ))}
    </VideoList>
  );
};

const VideoSkeletons = () => (
  <VideoList>
    {new Array(FETCH_VIDEO_COUNT).fill(0).map(() => (
      <VideoSkeleton key={generateID()} />
    ))}
  </VideoList>
);

const useVideoSearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');

  const search = (e: FormEvent) => {
    e.preventDefault();

    setQuery(keyword);
  };

  return { keyword, setKeyword, query, search };
};

const Container = styled.section`
  background-color: ${colors.grey50};
  width: 800px;
  height: 70vh;
  overflow-y: scroll;
  text-align: center;
`;

const SearchForm = styled.form`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.grey200};
  border-bottom: 1px solid ${colors.grey200};
  padding: 1rem 0;
  position: sticky;
  top: 0;

  & > input {
    margin-right: 1rem;
  }
`;

const VideoList = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 1rem;
  justify-items: center;
`;

export default VideoSearchForm;
