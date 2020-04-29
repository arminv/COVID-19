import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://covid-193.p.rapidapi.com';
const HEADERS = {
  'content-type': 'application/octet-stream',
  'x-rapidapi-host': 'covid-193.p.rapidapi.com',
  'x-rapidapi-key': API_KEY,
};

// Get All Countries:
export const fetch_all_countries = async () => {};

// Get All Statistics for All Countries or a given country:
export const fetch_all_data = async (country) => {
  let CUSTOM_URL = `${BASE_URL}/statistics`;

  if (country) {
    CUSTOM_URL = `${BASE_URL}/statistics?country=${country}`;
  }

  return await axios({
    method: 'GET',
    url: CUSTOM_URL,
    headers: HEADERS,
  })
    .then((response) => {
      console.log(response.data.response);
    })
    .catch((error) => {
      console.log(error);
    });
};
