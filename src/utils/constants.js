const API_KEY = "AIzaSyAXhz7ndnzOO2lrE-J7TgLcY_z1rG-g_ng";
const VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
const BUTTONS_LIST = [
  "All",
  "News",
  "Music",
  "Live",
  "Mixes",
  "Andriod",
  "Gadgets",
  "Computers",
  "Podcasts",
  "Elon Musk",
];
const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
const LIVE_CHAT_COUNT = 25;
const COMMENTS_JSON = [
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Ashok Marthu",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Ashok Marthu",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Ashok Marthu",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Ashok Marthu",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Ashok Marthu",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Ashok Marthu",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ashok Marthu",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ashok Marthu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

export {
  VIDEOS_API,
  BUTTONS_LIST,
  API_KEY,
  YOUTUBE_SEARCH_API,
  LIVE_CHAT_COUNT,
  COMMENTS_JSON
};
