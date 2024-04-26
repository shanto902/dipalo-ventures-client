import { TInstagramPost, TYoutubePlaylist } from '@/components/types';

const getAllInstagramPosts = async (): Promise<TInstagramPost[]> => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,children{media_url,media_type}&access_token=${process.env.INSTAGRAM_TOKEN}`
  );

  const data = await res.json();

  return data.data as TInstagramPost[];
};

export default getAllInstagramPosts;
