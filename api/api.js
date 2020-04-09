// eslint-disable-next-line max-len
const BASE_URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
const fetch = require('node-fetch');

export const getData = async() => {
  const response = await fetch(BASE_URL);
  const result = response.json();

  return result;
};
