const LOCATION = "London,uk";
const API_KEY = "b3c652e971788bf05a1d8f9266c681a7";
const URL_BASE = "http://api.openweathermap.org/data/2.5/weather";


export const API_WEATHER = `${URL_BASE}?q=${LOCATION}&APPID=${API_KEY}`;