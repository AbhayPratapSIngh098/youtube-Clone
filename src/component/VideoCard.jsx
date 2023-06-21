import React from 'react';
import VideoLength from "../utlis/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
  console.log(video);
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className='text-white flex flex-col mb-8'>
      <div className='h-48px md:rounded-xl md:40px overflow-hidden relative'>
      <img src={`${video?.thumbnails?.[0]?.url}`} className='h-full w-full object-cover' alt='thumnail'/>
      {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
      </div>
      <div className='flex flex-row mt-3 text-white'>
         <div className='flex flex-start'>
          <div className='h-9 w-9 rounded-full overflow-hidden'>
            <img src={`${video?.author?.avatar?.[0].url}`} className='h-full w-full object-cover' alt='avatar'/>
          </div>
         </div>
         <div className='flex flex-col ml-3 overflow-hidden'>
          <span className='line-clamp-2 text-white text-sm font-bold'>{video?.title}</span>
          <span className='text-[12px] font-semibold mt-1 text-white/[0.7] flex items-center'>
            {video?.author?.title}
            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (<BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>)}
            </span>
            <div className='flex text-[12px] font-semibold mt-1 text-white/[0.7] items-center'>
              <span >{`${abbreviateNumber(video?.stats?.views,2)}`} views</span>
              <span className='font-bold text-xl mt-[-8px] mx-2 '>.</span>
              <span >{video?.publishedTimeText}</span>
            </div>
         </div>
      </div>
    </div>
    </Link>
  )
}

export default VideoCard