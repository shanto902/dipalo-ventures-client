import { Suspense } from 'react';
import { TMediumPost } from '../../types';
import Image from 'next/image';
import PaddingContainer from '../../Layout/PaddingContainer';
import moment from 'moment';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import { CiRead } from 'react-icons/ci';

const Medium = ({ mediumPosts }: { mediumPosts: TMediumPost[] }) => {
  return (
    <PaddingContainer className=" relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 my-5">
      {mediumPosts.map((post, i) => (
        <AnimatedDiv
          id={i}
          key={i}
          delay={0.01}
          className="group card w-full bg-base-100 hover:shadow-2xl hover:bg-dipalo shadow-lg transition-all duration-300 hover:text-white"
        >
          <Suspense fallback={<div className="skeleton w-full h-full"></div>}>
            <div className=" flex flex-col h-full w-full ">
              <a target="_blank" href={post.link}>
                <figure>
                  {' '}
                  <Image
                    className=" w-full h-[150px] object-cover"
                    src={post.image as string}
                    width={1000}
                    height={500}
                    alt={post.title}
                  />
                  <div className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex justify-center items-center bg-dipalo/30 size-full">
                    <CiRead className=" size-32 text-white opacity-80" />
                  </div>
                </figure>
              </a>
              <div className="card-body z-10">
                <h2 className="card-title  lg:text-xl md:text-lg text-base line-clamp-2">
                  {post.title}
                </h2>
                <p className=" line-clamp-2 lg:text-base md:text-sm text-xs">
                  {post.description}
                </p>
                <div className="card-actions justify-end">
                  <p>{moment(post.published).fromNow()}</p>
                  <a
                    href={post.link}
                    className="  hover:underline decoration-white underline-offset-4 font-bold"
                  >
                    Read Post
                  </a>
                </div>
              </div>
            </div>
          </Suspense>
        </AnimatedDiv>
      ))}
    </PaddingContainer>
  );
};

export default Medium;
