export const YOUTUBE_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg";
export const HAMBURGER_ICON =
  "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png";

const YT_API_KEY = "AIzaSyDx0qnoUhiw1bpIoTCFcHfRbxW3wb81SGg";
export const YT_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YT_API_KEY}`;

export const YT_SEACR_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
