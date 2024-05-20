import Header from '@/components/common/Header';
import getMediumPosts from '@/helpers/getMediumPosts';
import image from '@/public/assets/headers/media.jpeg';
import MediaTabs from '@/components/Pages/Media/MediaTabs';
import getAllYoutubeVideos from '@/helpers/getAllYoutubeVideos';
import getAllInstagramPosts from '@/helpers/getAllInstagramPosts';
import { getMetadata } from '@/components/utils/generateMetadata';
export const metadata = getMetadata({
  title: 'Media | Dipalo Ventures',
  description: 'Youtube, Instagram, Medium and All Events posts',
});
const MediaPage = async () => {
  const mediumPosts = await getMediumPosts();
  const youtubePlaylist = await getAllYoutubeVideos();
  const instagramPosts = await getAllInstagramPosts();

  return (
    <>
      <Header image={image} title={'Media'} breadcrumb="Media" />
      <MediaTabs
        mediumPosts={mediumPosts}
        youtubePlaylist={youtubePlaylist}
        instagramPosts={instagramPosts}
      />
    </>
  );
};

export default MediaPage;
