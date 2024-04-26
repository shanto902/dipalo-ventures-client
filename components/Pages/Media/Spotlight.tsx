import PaddingContainer from '@/components/Layout/PaddingContainer';
import { TInstagramPost } from '@/components/types';
import Image from 'next/image';
import React from 'react';
import InstagramSlider from './InstagramSlider';

const Spotlight = ({
  instagramPosts,
}: {
  instagramPosts: TInstagramPost[];
}) => {
  return (
    <PaddingContainer>
      <section className=" grid grid-cols-4 gap-5">
        {instagramPosts.map((post) => (
          <div key={post.id}>
            {
              <div>
                <h2 className=" line-clamp-2">{post.caption}</h2>
                {post.media_type === 'IMAGE' && (
                  <Image
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
                      onClick={() => {
                        const modal = document.getElementById(
                          `my_modal_${post.id}`
                        ) as HTMLDialogElement;
                        if (modal) {
                          modal.showModal();
                        }
                      }}
                      src={post.media_url}
                      alt={post.caption}
                      width={400}
                      height={400}
                    />
                  )}

                {post.media_type === 'VIDEO' && (
                  <video autoPlay muted preload="none"  onClick={() => {
                    const modal = document.getElementById(
                      `my_modal_${post.id}`
                    ) as HTMLDialogElement;
                    if (modal) {
                      modal.showModal();
                    }
                  }}>
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            }{' '}
            <dialog id={`my_modal_${post.id}`} className="modal">
              <div className="modal-box md:max-w-6xl max-w-sm rounded-xl bg-stone-50">
                {post.children?.data ? (
                  <InstagramSlider post={post.children.data} />
                ) : (
                  <Image
                    src={post.media_url}
                    alt={post.caption}
                    width={400}
                    height={400}
                  />
                )}
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        ))}
      </section>
    </PaddingContainer>
  );
};

export default Spotlight;
