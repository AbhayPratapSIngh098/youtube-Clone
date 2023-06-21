import axios from "axios";


const movieApi = axios.create({
    baseURL: "https://youtube138.p.rapidapi.com",
    params: {
     hl: 'en',gl: 'IN'
   },
   headers: {
     'X-RapidAPI-Key': "d4003de688msh9c3ad4f44e27172p1d1e5djsnd8ef5e9d3a17",
     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
   },
 },
 );


 export const fetchMovieApi = async (url)=>{
    const response = await movieApi.get(`${url}`);
    return response.data;
 }



