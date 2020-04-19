import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import { API_WEATHER } from './../../constants/config';
import transformWeather from './../../services/transformWeather';
import './styles.css';

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

    hanleUpdateClick = () => {
        fetch(API_WEATHER)
        .then(resolve => {
            return resolve.json()
        }).then(data => {
            const newWeather = transformWeather(data);
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