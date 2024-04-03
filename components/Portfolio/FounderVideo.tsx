'use client '
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
const FounderVideo = () => {

      return  <div className=' flex w-full justify-center items-center py-10  flex-col gap-10     '>
        <div className="text-center text-dipalo underline underline-offset-[10px] text-4xl font-bold ">Founder Intro Video</div>

        <iframe  className=' rounded-3xl' loading="lazy" width="1236" height="695" src="https://www.youtube.com/embed/IqbFkaLaII0" title="Dipalo Ventures Portfolio Companies" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
}

export default FounderVideo