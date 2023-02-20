const GOOGLE_API_KEY = "AIzaSyAdJJ26InsFv2bhCIFCjrYsf-auzgnW1Vw";

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEOS_API =
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
