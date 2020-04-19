import { API_KEY, URL_BASE } from './../constants/config';

const getUrlWeatherByCity = city => {
    return `${URL_BASE}?q=${city}&APPID=${API_KEY}`;
}

export default getUrlWeatherByCity;