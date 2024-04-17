import React from 'react';
import { TMediumPost } from '../../types';
import Image from 'next/image';
import PaddingContainer from '../../Layout/PaddingContainer';
import moment from 'moment';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import { CiRead } from "react-icons/ci";

const Medium = ({ mediumPosts }: { mediumPosts: TMediumPost[] }) => {
  return (
    <PaddingContainer className=" relative grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10 my-10">
      {mediumPosts.map((post, i) => (
        <AnimatedDiv id={i}  key={i} className="group card w-fit bg-base-100 hover:shadow-2xl hover:bg-dipalo shadow-lg transition-all duration-300 hover:text-white" >
         <div className=' flex flex-col h-full '>
         <a href={post.postLink} >
         <figure>
            {' '}
           
            <Image
            className=' h-[150px] w-full object-cover object-center'
              src={post.image as string}
              width={500}
              height={500}
              alt={post.title}
            />
     
              <div className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex justify-center items-center bg-dipalo/30 size-full">
                  <CiRead  className=" size-32 text-white opacity-80" />
                </div>
                
          </figure>
          </a>
          <div className="card-body z-10">
            <h2 className="card-title  text-lg line-clamp-2">
              {post.title}
            </h2>
            <p className=' line-clamp-3'>{post.description}</p>
            <div className="card-actions justify-end">
              <p>{moment(post.publishedDate, "YYYYMMDD").fromNow()}</p>
              <a href={post.postLink} className="  hover:underline decoration-white underline-offset-4 font-bold">
                Read Post
              </a>
            </div>
          </div>
         </div>
        </AnimatedDiv>
      ))}
    </PaddingContainer>
  );
};

export default Medium;
