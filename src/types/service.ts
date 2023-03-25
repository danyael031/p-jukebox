export type AudioStream = {
  bitrate: number, // The bitrate of the audio stream in bytes
  codec: string, // The codec of the audio stream
  format: string,// The format of the audio stream
  indexEnd: number, // Useful for creating dash streams
  indexStart: number, // Useful for creating dash streams
  initStart: number, // Useful for creating dash streams
  initEnd: number, // Useful for creating dash streams
  mimeType: string, // The mime type of the audio stream
  quality: string, // The quality of the audio stream
  url: string, // The stream's URL
  videoOnly: boolean // Whether or not the stream is video only
}

export type StreamResponse = {
  audioStreams: Array<AudioStream>, // The audio streams of the video
  dash: string | null, // The dash manifest URL, to be used if not null (for OTF streams)
  description: string, // The description of the video
  dislikes: number, // The number of dislikes the video has
  duration: number, // The duration of the video in seconds
  hls: string | null, // The hls manifest URL, to be used for Livestreams,
  lbryId: string, // The lbry id of the video, if available
  likes: number, // The number of likes the video has
  livestream: boolean, // Whether or not the video is a livestream
  proxyUrl: string, // The proxy url to be used for rewrites
  relatedStreams: [
    {
      duration: number, // The duration of the related video in seconds
      thumbnail: string, // The thumbnail of the related video
      title: string, // The title of the related video
      uploadedDate: string, // The date the related video was uploaded
      uploaderAvatar: string, // The avatar of the channel of the related video
      uploaderUrl: string, // The URL of the channel of the related video
      uploaderVerified: boolean, // Whether or not the channel of the related video is verified
      url: string,// The URL of the related video
      views: number // The number of views the related video has
    }
  ], // A list of related streams
  subtitles: [
    {
      autoGenerated: boolean, // Whether or not the subtitle was auto-generated
      code: string, // The language code of the subtitle
      mimeType: string, // The mime type of the subtitle
      name: string, // The name of the subtitle
      url: string// The URL of the subtitle
    }
  ], // A list of subtitles
  thumbnailUrl: string, // The thumbnail of the video
  title: string, // The title of the video
  uploadedDate: string, // The date the video was uploaded
  uploader: string, // The name of the channel of the video
  uploaderUrl: string, // The URL of the channel of the video
  uploaderVerified: boolean, // Whether or not the channel of the video is verified
  videoStreams: [
    {
      bitrate: number, // The bitrate of the video stream in bytes
      codec: string, // The codec of the video stream
      format: string, // The format of the video stream
      fps: number, // The frames per second of the video stream
      height: number, // The height of the video stream
      indexEnd: number, // Useful for creating dash streams
      indexStart: number, // Useful for creating dash streams
      initStart: number, // Useful for creating dash streams
      initEnd: number, // Useful for creating dash streams
      mimeType: number, // The mime type of the video stream
      quality: number, // The quality of the video stream
      url: string, // The stream's URL
      videoOnly: boolean// Whether or not the stream is video only
      width: number// The width of the video stream
    }
  ], // The video streams of the video
  views: number // The number of views the video has
}



export type Item = {
  url: string,
  type: string,
  title: string,
  thumbnail: string,
  uploaderName: string,
  uploaderUrl: string,
  uploaderAvatar: string | null,
  uploadedDate: string | null,
  shortDescription: string | null,
  duration: number,
  views: number,
  uploaded: number,
  uploaderVerified: boolean,
  isShort: boolean
}

export type SearchResponse = {
  items: Array<Item>
}