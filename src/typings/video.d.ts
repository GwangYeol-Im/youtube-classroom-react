interface SearchVideo {
  kind: 'youtube#searchResult';
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      key: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
  };
}

interface SearchVideoResponse {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResult: number;
    resultsPerPage: number;
  };
  items: SearchVideo[];
}
