// Visit https://api.openweathermap.org & then signup to get our API keys for free
import Dotenv from '../.env'

let key = Dotenv.API_KEY;
module.exports = {
    key: `${key}`,
    base: "https://api.openweathermap.org/data/2.5/",
  };
  
  