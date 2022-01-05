import { request } from './remote.util';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchYTBVideos = async (query: string, count: number) => {
  const encoded = encodeURIComponent(query);
  const uri = `${YOUTUBE_URL}/search?part=snippet&q=${encoded}&maxResults=${count}&key=${process.env.YOUTUBE_KEY}`;

  const response = await request.get(uri);
  const searchResult = await response.json();

  return searchResult as SearchVideoResponse;
};
