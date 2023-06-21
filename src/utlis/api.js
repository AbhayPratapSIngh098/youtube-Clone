import axios from "axios";
import APIKEY from "apidata";


const movieApi = axios.create({
    baseURL: "https://youtube138.p.rapidapi.com",
    params: {
     hl: 'en',gl: 'IN'
   },
   headers: {
     'X-RapidAPI-Key': "APIKEY",
     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
   },
 },
 );


 export const fetchMovieApi = async (url)=>{
    const response = await movieApi.get(`${url}`);
    return response.data;
 }



