import React from 'react';
import VideoLength from "../utlis/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';

const SuggestionVideocard = ({ video }) => {
 
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className='flex flex-row mb-3 hover:bg-white/[0.15] cursor-pointer rounded-xl'>
      <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={video?.thumbnails[0]?.url}
        />
        {video?.lengthSeconds && (
          <VideoLength time={video?.lengthSeconds} />
        )}
      </div>
      <div className='flex flex-row text-white'>
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

export default SuggestionVideocard