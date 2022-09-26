import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_Rapid_API_HOST_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',

    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.post(`${BASE_URL}/${url}`,
    options)
    console.log({data});

    return data;
  }