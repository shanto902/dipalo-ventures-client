import { TInstagramPost, TYoutubePlaylist } from '@/components/types';

const getAllInstagramPosts = async (): Promise<TInstagramPost[]> => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,thumbnail_url,permalink,children{media_url,media_type}&access_token=${process.env.INSTAGRAM_TOKEN}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  return data.data as TInstagramPost[];
};

export default getAllInstagramPosts;
