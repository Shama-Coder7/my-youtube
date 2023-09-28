const GOOGLE_API_KEY = 'AIzaSyCArTBzZaIkMYrNak3b2pWq__2V_e8V174';

export const LIVE_CHAT_COUNT = 14;

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const SEARCH_TEXT_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=' +
  GOOGLE_API_KEY +
  '&q=';

export const SEARCH_BY_ID =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' +
  GOOGLE_API_KEY +
  '&id=';

// LiveChat >>>>>>>>>> Infinite Scroll >>>>>>> Pagination
