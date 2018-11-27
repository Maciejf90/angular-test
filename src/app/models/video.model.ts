
export interface Video {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    title: string;
    description: string;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}


// {
//   "kind": "youtube#searchResult",
//   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/PoskDKybsxCt5RnO0S7K2kzf-cg\"",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "9w2W8ndLOlE"
//   },
//   "snippet": {
//     "publishedAt": "2015-10-05T18:59:16.000Z",
//     "channelId": "UC3NUF3LjDPx7V4BrrC2U2tw",
//     "title": "BEST OF SLACKLINE - 2015",
//     "description": "A compilation of some of the best pro athletes of slackline. Hope you enjoy! Watch: https://www.youtube.com/watch?v=Kl3GtcSDrqY Song: Oliver Heldens ...",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/9w2W8ndLOlE/default.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/9w2W8ndLOlE/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/9w2W8ndLOlE/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "Slackline Videos",
//     "liveBroadcastContent": "none"
//   }
// }
