import React, { useState } from 'react';
import { TYoutubePlaylist } from '../../types';
import PaddingContainer from '../../Layout/PaddingContainer';
import Image from 'next/image';
import moment from 'moment';
import Video from '../../utils/Video';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import { IoIosPlayCircle } from 'react-icons/io';
const Youtube = ({
  youtubePlaylist,
}: {
  youtubePlaylist: TYoutubePlaylist[];
}) => {
  const [modal, setModal] = useState('');

  return (
    <PaddingContainer className="">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5">
        {youtubePlaylist.map((video, i) => (
          <AnimatedDiv
          delay={.15}
            id={i}
            key={video.id}
            className="hover:shadow-2xl shadow-lg transition-shadow duration-300 bg-base-100  w-fit overflow-hidden rounded-2xl"
          >
            <div
              className="group card hover:bg-dipalo  hover:cursor-pointer  transition-colors duration-300   "
              onClick={() => {
                setModal(video.id);
              }}
            >
              <figure className="relative aspect-video ">
                <Image
                  className="w-full overflow-hidden my-2 shadow-md rounded-t-2xl"
                  src={video.image.url}
                  height={video.image.height}
                  width={video.image.width}
                  alt={video.title}
                />
                <div className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex justify-center items-center bg-dipalo/30 size-full">
                  <IoIosPlayCircle className=" size-32 text-white opacity-80" />
                </div>
              </figure>
              <div className="card-body -mt-5">
                <h2
                  onClick={() => {
                    setModal(video.id);
                  }}
                  className="card-title md:text-md text-base group-hover:text-white text-black transition-colors group-hover:underline underline-offset-4 duration-300  cursor-pointer"
                >
                  <span className=" line-clamp-2">{video.title}</span>
                </h2>
                <div className="card-actions  text-end group-hover:text-white text-black ">
                  <p className=" md:text-sm text-xs">
                    {moment(video.publishedAt, 'YYYYMMDD').fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        ))}
      </div>

      {modal && (
        <dialog id={`my_modal_${modal}`} className="modal" open>
          <div className="modal-box  lg:min-w-[690px] rounded-xl bg-black">
            <Video
              video={
                youtubePlaylist.find((video) => video.id === modal)?.video || ''
              }
            />
          </div>

          <form
            method="dialog"
            className="modal-backdrop bg-black/80 transition-colors duration-300"
          >
            <button onClick={() => setModal('')}>Close</button>
          </form>
        </dialog>
      )}
    </PaddingContainer>
  );
};

export default Youtube;
