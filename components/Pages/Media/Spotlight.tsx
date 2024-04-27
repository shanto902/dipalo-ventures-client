import PaddingContainer from '@/components/Layout/PaddingContainer';
import { TInstagramPost } from '@/components/types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import InstagramSlider from './InstagramSlider';
import './styles.css';
import AnimatedDiv from '@/components/common/AnimatedDiv';
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
            <div className="card mb-5  bg-base-100 shadow-xl">
              <figure>
                {post.media_type === 'IMAGE' && (
                  <Image
                    className="aspect-square object-cover"
                    src={post.media_url}
                    alt={post.caption}
                    width={400}
                    height={400}
                    onClick={() => {
                      const modal = document.getElementById(
                        `my_modal_${post.id}`
                      ) as HTMLDialogElement;
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                  />
                )}
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
              <div className="card-body !p-4">
                <h2 className="text-base font-semibold line-clamp-2">
                  {post.caption}
                </h2>
              </div>
            </div>

            <dialog id={`my_modal_${post.id}`} className="modal">
              <div className="modal-box relative max-w-3xl no-scrollbar bg-black/70 backdrop-blur-md rounded-xl flex justify-center items-center">
    
                  {post.children?.data ? (
                  <InstagramSlider post={post.children.data} caption={post.caption} />
                ) : post.media_type === 'IMAGE' ? (
                 <div>
                   <Image
                   className='aspect-auto'
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
                  <video className=' max-h-[80vh] rounded-xl' controls preload="none">
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
