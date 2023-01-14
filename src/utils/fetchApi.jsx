import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
   params: {
      maxResults: 50,
   },
   headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_KEY_URL,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};


export const  fetchApiVideos = async (url) =>{
    const {data} = await axios.get(`${baseUrl}/${url}`,options);

    return data;
}