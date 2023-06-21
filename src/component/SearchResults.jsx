import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import {useParams } from 'react-router-dom';
import { fetchMovieApi } from '../utlis/api';
import Leftbar from './Leftbar';
import SearchResultsCard from './SearchResultsCard';


const SearchResults = () => {
  const {setLoading}=useContext(Context);
  const [suggested, setSuggested]= useState();
 

  const {searchQuery} = useParams();
  console.log(searchQuery)

  useEffect(()=>{
    fetchSearchMovie();
  },[searchQuery])

  const fetchSearchMovie=()=>{
    setLoading(true)
    fetchMovieApi(`search/?q=${searchQuery}`).then((res)=>{
      setSuggested(res?.contents)
      setLoading(false)
    })
  }
  return (
    <div className='h-[calc(100%-56px)] flex flex-row'>
       <Leftbar />
       <div className='grow md:absolute left-60 w-[calc(100%-240px)] h-full overflow-y-auto bg-black' >
            {suggested?.map((value,i)=>{
              if(value?.type !=="video") return false;
              return (<SearchResultsCard  key={i} video={value?.video}/>)
            })}
       </div>
    </div>
  )
}

export default SearchResults