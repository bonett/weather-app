import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN
} from './../../constants/weather';
import './styles.css';

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};

class WeatherLocation extends Component {
    render() {
        return (
            <div className="weather_location_content">
                <Location city={"Alemania"} />
                <WeatherData data={data} />
            </div>
        )
    }
}

export default WeatherLocation;