import PaddingContainer from '@/components/Layout/PaddingContainer';
import { TInstagramPost } from '@/components/types';
import Image from 'next/image';
import { useEffect } from 'react';
import InstagramSlider from './InstagramSlider';
import './styles.css';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import moment from 'moment';
const Spotlight = ({
  instagramPosts,
}: {
  instagramPosts: TInstagramPost[];
}) => {
  useEffect(() => {
    const handleModalClose = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach((video: HTMLVideoElement) => {
        video.pause();
      });
    };

    // Listen for dialog close event
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal: Element) => {
      const dialogModal = modal as HTMLDialogElement;
      dialogModal.addEventListener('close', handleModalClose);
    });

    // Cleanup function
    return () => {
      modals.forEach((modal: Element) => {
        const dialogModal = modal as HTMLDialogElement;
        dialogModal.removeEventListener('close', handleModalClose);
      });
    };
  }, []);

  return (
    <PaddingContainer>
      <section className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {instagramPosts.map((post, i) => (
          <AnimatedDiv delay={0.1} key={post.id} id={i} className="p-2">
            <div
              className="card mb-5 group h-[300px] bg-base-100 hover:shadow-xl shadow-md cursor-pointer hover:bg-dipalo duration-500 transition-colors"
              onClick={() => {
                const modal = document.getElementById(
                  `my_modal_${post.id}`
                ) as HTMLDialogElement;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              <figure>
                {post.media_type === 'CAROUSEL_ALBUM' &&
                  post.children?.data && (
                    <Image
                      className="aspect-square object-cover"
                      onClick={() => {
                        const modal = document.getElementById(
                          `my_modal_${post.id}`
                        ) as HTMLDialogElement;
                        if (modal) {
                          modal.showModal();
                        }
                      }}
                      src={post.media_url}
                      alt={post.id}
                      width={400}
                      height={400}
                    />
                  )}
                {post.media_type === 'IMAGE' && (
                  <Image
                    className="aspect-square object-cover"
                    src={post.media_url}
                    alt={post.caption}
                    width={400}
                    height={400}
                  />
                )}

                {post.media_type === 'VIDEO' && (
                  <Image
                    className="aspect-square object-cover"
                    onClick={() => {
                      const modal = document.getElementById(
                        `my_modal_${post.id}`
                      ) as HTMLDialogElement;
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                    src={post.thumbnail_url}
                    alt={post.caption}
                    width={400}
                    height={400}
                  />
                )}
              </figure>
              <div className=" flex flex-col   p-4  group-hover:text-white transition-colors duration-500">
                <div className="text-base  font-semibold line-clamp-2 ">
                  {post.caption}
                </div>
                <div className=" md:text-sm text-xs text-right justify-self-end ">
                  {moment(post.timestamp, 'YYYYMMDD').fromNow()}
                </div>
              </div>
            </div>

            <dialog id={`my_modal_${post.id}`} className="modal">
              <div className="modal-box w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-xl flex justify-center items-center">
                {post.children?.data ? (
                  <InstagramSlider
                    post={post.children.data}
                    caption={post.caption}
                  />
                ) : post.media_type === 'IMAGE' ? (
                  <div>
                    <Image
                      className="aspect-auto"
                      src={post.media_url}
                      alt={post.caption}
                      width={1000}
                      height={1000}
                    />
                    <h2 className=" hover:opacity-100 opacity-0 p-10 transition-all duration-500 absolute bottom-0 left-0 z-10 text-xs bg-black/50 text-white">
                      {post.caption}
                    </h2>
                  </div>
                ) : (
                  <video
                    key={post.id}
                    className=" max-h-[80vh] rounded-xl"
                    controls
                    preload="none"
                  >
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </AnimatedDiv>
        ))}
      </section>
    </PaddingContainer>
  );
};

export default Spotlight;
