const axios = require('axios');


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = 'b995599e898a96f44fcb8cae11dda9d4';
let LOCATION_ZIP_CODE = '39056';
let COUNTRY_CODE = 'us';
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;


axios.get(ENTIRE_API_URL)
  .then(res => console.log(res))
  .catch(err => console.log('Error: ', err));
