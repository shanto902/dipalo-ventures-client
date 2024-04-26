'use client'
import React, { ReactNode, useState } from 'react'
import PaddingContainer from '../../Layout/PaddingContainer';
import { motion, MotionConfig } from 'framer-motion'
import ResizablePanel from '../../common/ResizablePanel';
import Medium from './Medium';
import { TInstagramPost, TMediumPost, TYoutubePlaylist } from '../../types';
import Youtube from './Youtube';
import Spotlight from './Spotlight';
import Events from './Events';

type TMedia = {
id: number;
tabName:string;
element: ReactNode;
}
const MediaTabs = ({mediumPosts, youtubePlaylist, instagramPosts}:{mediumPosts: TMediumPost[], youtubePlaylist:TYoutubePlaylist[], instagramPosts:TInstagramPost[]}) => {
  const media : TMedia[] = [{
    id: 1,
    tabName: "Youtube",
    element: <Youtube youtubePlaylist={youtubePlaylist}/>
  },
  {
    id: 2,
    tabName: 'Spotlight',
    element: <Spotlight instagramPosts={instagramPosts}/>
  },
  {
    id: 3,
    tabName: 'Medium',
    element: <Medium mediumPosts={mediumPosts} />
  },
  {
    id: 4,
    tabName: 'Events',
    element: <Events />
  }
  ]
  
  let [activeTab, setActiveTab] = useState(media[0].id);
  let duration = 0.25;
  const selectedTab = media.find((tab) => tab.id === activeTab);
  
    
  return (
    <PaddingContainer className=' relative'>
    <div className="flex flex-wrap md:gap-6 gap-1 space-x-1 justify-center my-5">
      {media.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? 'text-white' : 'hover:text-dipalo'
          } relative rounded-3xl shadow-md px-3 bg-stone-50 z-10 lg:w-[200px] w-fit h-[80px] py-1.5 overflow-hidden text-lg font-medium text-black dipalo transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 rounded-3xl  bg-dipalo -z-30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.tabName}
        </button>
      ))}
    </div>
    <MotionConfig transition={{ duration }}>
      {selectedTab && (
        <ResizablePanel>
         { selectedTab.element }
        </ResizablePanel>
      )}
    </MotionConfig>

  </PaddingContainer>
  )
}

export default MediaTabs