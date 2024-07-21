import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, options);
  return data;
};
