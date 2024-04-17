import React from 'react';
import { TMediumPost } from '../types';
import Image from 'next/image';
import PaddingContainer from '../Layout/PaddingContainer';
import moment from 'moment';

const Medium = ({ mediumPosts }: { mediumPosts: TMediumPost[] }) => {

  return (
    <PaddingContainer className=" relative grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10 my-10">
      {mediumPosts.map((post, i) => (
        <div key={i} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            {' '}
            <Image
            className=' h-[150px] w-full object-cover object-center'
              src={post.image as string}
              width={500}
              height={500}
              alt={post.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-lg line-clamp-2">
              {post.title}
            </h2>
            <p className=' line-clamp-3'>{post.description}</p>
            <div className="card-actions justify-end">
              <p>{moment(post.publishedDate, "YYYYMMDD").fromNow()}</p>
              <a href={post.postLink} className=" hover-underline-animation hover:text-dipalo font-bold">
                Read Post
              </a>
            </div>
          </div>
        </div>
      ))}
    </PaddingContainer>
  );
};

export default Medium;
