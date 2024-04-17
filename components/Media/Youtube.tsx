import React, { useState } from 'react';
import { TYoutubePlaylist } from '../types';
import PaddingContainer from '../Layout/PaddingContainer';
import Image from 'next/image';
import moment from 'moment';
import Video from '../common/utils/youtubeVideoHover';

const Youtube = ({
  youtubePlaylist,
}: {
  youtubePlaylist: TYoutubePlaylist[];
}) => {
  const [modal, setModal] = useState("");

  return (
    <PaddingContainer className=''>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10'>
        {youtubePlaylist.map((video) => (
          <div key={video.id} className="card w-96 bg-base-100 shadow-xl overflow-hidden">
            <figure className='aspect-video' onClick={() => {
              setModal(video.id);
            }}>
              <Image
                className="w-full overflow-hidden my-2 shadow-md rounded-t-2xl"
                src={video.image.url}
                height={video.image.height}
                width={video.image.width}
                alt={video.title}
              />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title md:text-lg text-md line-clamp-2">{video.title}</h2>
              <div className="card-actions justify-end">
                <p>{moment(video.publishedAt, 'YYYYMMDD').fromNow()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <dialog id={`my_modal_${modal}`} className="modal" open>
          <div className="modal-box  min-w-[690px] rounded-xl bg-black">
            <Video  video={youtubePlaylist.find(video => video.id === modal)?.video || ''} />
          </div>

          <form method="dialog" className="modal-backdrop bg-black/40 transition-colors duration-300" 
          >
            <button onClick={() => setModal("")}>Close</button>
          </form>
        </dialog>
      )}
    </PaddingContainer>
  );
};

export default Youtube;
