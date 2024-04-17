import Header from '@/components/common/Header';
import getMediumPosts from '@/helpers/getMediumPosts';
import React from 'react';
import image from '@/public/assets/headers/media.jpeg';
import MediaTabs from '@/components/Pages/Media/MediaTabs';
import getAllYoutubeVideos from '@/helpers/getAllYoutubeVideos';

const MediaPage = async () => {
  const mediumPosts = await getMediumPosts();
  const youtubePlaylist = await getAllYoutubeVideos();

  return (
    <>
      <Header image={image} title={'Media'} breadcrumb="Media" />
      <MediaTabs mediumPosts={mediumPosts} youtubePlaylist={youtubePlaylist} />
    </>
  );
};

export default MediaPage;
