import PaddingContainer from '@/components/Layout/PaddingContainer';
import { TInstagramPost } from '@/components/types';
import Image from 'next/image';
import React from 'react';
import InstagramSlider from './InstagramSlider';
import './styles.css';
import AnimatedDiv from '@/components/common/AnimatedDiv';
const Spotlight = ({
  instagramPosts,
}: {
  instagramPosts: TInstagramPost[];
}) => {
  return (
    <PaddingContainer>
      <section className=" grid grid-cols-4 ">
        {instagramPosts.map((post,i) => (
          <AnimatedDiv delay={0.10} key={post.id} id={i} className='p-2'>
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
                <h2 className="text-base font-semibold line-clamp-2">{post.caption}</h2>
              </div>
            </div>

            <dialog id={`my_modal_${post.id}`} className="modal">
              <div className="modal-box h-fit min-w-md rounded-xl bg-black flex justify-center items-center">
                {post.children?.data ? (
                  <InstagramSlider post={post.children.data} />
                ) : post.media_type === 'IMAGE' ? (
                  <Image
                    src={post.media_url}
                    alt={post.caption}
                    width={1000}
                    height={1000}
                  />
                ) : (
                  <video autoPlay muted preload="none">
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
