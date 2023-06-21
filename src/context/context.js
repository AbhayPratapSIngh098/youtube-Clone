import React, {createContext, useState, useEffect} from "react";
import { fetchMovieApi } from "../utlis/api";



export const Context = createContext();

export const AppContext = (props)=>{
    const[loading, setLoading] = useState();
    const[searchResults, setSearchResults]= useState([]);
    const[selectCategory, setSelectedCategory]= useState("New");
    const[mobileMenu, setMobileMenu] = useState(false);


 const fetchSelectedCategory = (query)=>{
    setLoading(true);
    fetchMovieApi(`search/?q=${query}`).then((res)=> setSearchResults(res.contents));
    setLoading(false);
}

useEffect(()=>{
    
    fetchSelectedCategory(selectCategory);
    
},[selectCategory])
  
 
    
   

return(
    <Context.Provider value=
    {{loading,setLoading,searchResults,setSearchResults,selectCategory,setSelectedCategory,mobileMenu, setMobileMenu}}>
            {props.children}
    </Context.Provider>)
}