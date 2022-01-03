import React, { useState } from 'react';

import { fetchYTBVideos } from 'remotes/video';
import styled from '@emotion/styled';

const VideoSearchForm = () => {
  const { keyword, setKeyword, videos, search } = useVideoSearchForm();

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
      <VideoList>{videos.map((items) => {})}</VideoList>
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
  width: 600px;
`;

const SearchForm = styled.form``;

const VideoList = styled.ul``;

export default VideoSearchForm;
