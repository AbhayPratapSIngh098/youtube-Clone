import React,{useContext} from 'react';

import { Context } from '../context/context';

import Leftbar from './Leftbar';
import VideoCard from "./VideoCard";


const Feed = () => {
  const {loading,searchResults} = useContext(Context);
  return (
    <div className='h-[calc(100%-56px)] flex flex-row'>
    
        <Leftbar />
      
      <div className='grow md:absolute left-60 w-[calc(100%-240px)] h-full overflow-y-auto bg-black' >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
            {!loading && searchResults.map((value,index)=>{
                  if(value.type !== "video") return false;
                  return( <VideoCard key={index} video={value.video} />)
                  
            })}
        </div>
      </div>
    </div>
  )
}

export default Feed