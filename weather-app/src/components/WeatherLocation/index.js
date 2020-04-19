import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import { LOCATION, API_KEY, URL_BASE } from './../../constants/config';
import './styles.css';

const api_weather = `${URL_BASE}?q=${LOCATION}&APPID=${API_KEY}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Alemania',
            data: {
                temperature: 10,
                weatherState: SUN,
                humidity: 10,
                wind: '10 m/s'
            }
        }
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp)

        const data = {
            humidity,
            weatherState,
            temperature,
            wind: `${speed} m/s`
        }

        return data;
    }

    hanleUpdateClick = () => {
        fetch(api_weather)
        .then(resolve => {
            return resolve.json()
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weather_location_content">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.hanleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;