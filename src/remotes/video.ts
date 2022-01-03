import { request } from './remote.util';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchYTBVideos = async (keyword: string) => {
  const videoCount = 10;
  const url = `${YOUTUBE_URL}/search?part=snippet&q=${keyword}&maxResults=${videoCount}&key=${process.env.YOUTUBE_KEY}`;

  const response = await request.get(url);
  const searchResult = await response.json();

  return searchResult as SearchVideoResponse;
};
