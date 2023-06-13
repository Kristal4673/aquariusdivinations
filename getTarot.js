const axios = require('axios');

async function getTarotData(day, month, year, hour, minute, name, latitude, longitude, timezone) {
    const options = {
        method: 'POST',
        url: 'https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '2bcab9ead3msh0012ca30e3965cdp19bdc2jsn9ec5386c7f85',
          'X-RapidAPI-Host': 'vedicrishi-horoscope-matching-v1.p.rapidapi.com'
        },
        data: {
          day: day,
          month: month,
          year: year,
          hour: hour,
          min: minute,
          name: name,
          lat: latitude,
          lon: longitude,
          tzone: timezone
        }
      };
  
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error('Error fetching tarot data:');
    throw error;
  }
}

module.exports = getTarotData;
