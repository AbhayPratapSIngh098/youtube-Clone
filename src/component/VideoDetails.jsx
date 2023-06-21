import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import {fetchMovieApi} from "../utlis/api";
import { Context } from '../context/context';
import { BsFillCheckCircleFill } from "react-icons/bs";
import {AiOutlineLike} from "react-icons/ai"
import { abbreviateNumber } from 'js-abbreviation-number';
import SuggestionVideoCard from "./SuggestionVideocard"

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [related, setRelated] = useState();
  const {id} = useParams();
  const{setLoading} = useContext(Context);

  useEffect(()=>{
    fetchvideo();
    relatedMovie();
  },[id])

  const relatedMovie = ()=>{
        setLoading(true);
        fetchMovieApi(`video/related-contents/?id=${id}`).then((res)=>{
          
          setLoading(false);
          setRelated(res.contents);

        })
  }

  const fetchvideo = ()=>{
    setLoading(true);
    fetchMovieApi(`video/details/?id=${id}`).then((res)=>{
      
      setLoading(false);
      setVideo(res);
    })
  }

  return (
    <div className='h-[calc(100%-56px)] flex justify-center bg-black'>
      <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>
        <div className='xl:w-[calc(100%-350px)] lg:w-[calc(100%-400px)] py-3 px-4 lg:py-6 overflow-y-auto flex flex-col'>
          <div className='h-[200px] md:h-[350px] xl:h-[400px] mx-[-16px] lg:mx-0'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} height="100%" width="100%" style={{backgroundColor: '#000000'}} controls playing={true}  />
          </div>
          <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {video?.title}
          </div>
          <div className='flex justify-between flex-col md:flex-row mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='h-11 w-11 rounded-full overflow-hidden'>
                <img src={`${video?.author?.avatar?.[0].url}`} className='h-full w-full object-cover' alt='avatar'/>
                </div>
              </div>
              <div className='flex flex-col ml-3 overflow-hidden'>
                <div className='text-white text-md font-semibold flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (<BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>)}
                </div>
                <div className='text-sm text-white/[0.7]'>
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className='flex text-white mt-4 md:mt-0'>
              <div className='flex items-center justify-center h-11 px-6 mr-4 rounded-3xl bg-white/[0.15]'>
              <AiOutlineLike className="text-xl text-white mr-2" />
              {`${abbreviateNumber(video?.stats?.likes,2)} Likes`} 
              </div>
              <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
              
              {`${abbreviateNumber(video?.stats?.views,2)} views`} 
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col xl:w-[400px] lg:w-[350px] py-6 px-4 overflow-y-auto '>
            {related?.map((value,i)=>{
              return <SuggestionVideoCard key={i} video={value?.video} />
            })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails