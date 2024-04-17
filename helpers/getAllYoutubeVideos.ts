import { TYoutubePlaylist } from '@/components/types';

const getAllYoutubeVideos = async (): Promise<TYoutubePlaylist[]> => {
  const res = await fetch(
    `${process.env.YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${process.env.PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data = await res.json();

  const youtubePlaylists: TYoutubePlaylist[] = data.items.map((item: any) => {
    const { id, snippet = {} } = item;
    const { title, publishedAt, resourceId, thumbnails = {} } = snippet;
    const { standard = {} } = thumbnails;

    const youtubePlaylist: TYoutubePlaylist = {
      id,
      title,
      publishedAt,
      image: {
        url: standard.url,
        width: standard.width,
        height: standard.height,
      },
      video: resourceId.videoId,
    };

    return youtubePlaylist;
  });

  return youtubePlaylists;
};

export default getAllYoutubeVideos;
