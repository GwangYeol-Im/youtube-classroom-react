import React, { useState } from 'react';

import SearchedVideo from 'components/videos/SearchedVideo';
import colors from 'constants/color';
import { fetchYTBVideos } from 'remotes/video';
import { generateID } from 'hooks/useId';
import styled from '@emotion/styled';

const VideoSearchForm = () => {
  const { keyword, setKeyword, videos, search } = useVideoSearchForm();

  const SearchedVideos = () => {
    if (!videos.length) return null;

    return (
      <VideoList>
        {videos.map((video) => (
          <SearchedVideo key={video.id.videoId ?? generateID()} video={video} />
        ))}
      </VideoList>
    );
  };

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
      <SearchedVideos />
    </Container>
  );
};

const useVideoSearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState<SearchVideo[]>([]);

  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword === '') return;

    try {
      const searchedVideos = await fetchYTBVideos(keyword);

      setVideos(searchedVideos.items);
    } catch (error) {}
  };

  return { keyword, setKeyword, videos, search };
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
