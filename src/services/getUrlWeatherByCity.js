import { API_KEY, URL_BASE } from './../constants/config';

const getUrlWeatherByCity = city => {
    return `${URL_BASE}weather?q=${city}&APPID=${API_KEY}`;
}

export default getUrlWeatherByCity;