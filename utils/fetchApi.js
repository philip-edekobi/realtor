import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com/';

const options = {
  headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '2dfd41baeamsh9a3b8654372e1bcp1b7dcejsn4cd1e5d3edf7'
  }
};

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, options);
    return data;
}