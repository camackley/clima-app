const axios = require('axios');
///////////////////////////////////7

const getClima=async(lat, lng)=>{
  let resp =await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f369635965b00ad16ced5da4da4b9f3b`)

  let clima =resp.data.main.temp;
  return clima;
}

module.exports ={
  getClima
}
