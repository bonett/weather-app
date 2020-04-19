import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN, CLOUD
} from './../../constants/weather';
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
        this.setState({
            city: 'Colombia',
            data: {
                temperature: 30,
                weatherState: CLOUD,
                humidity: 30,
                wind: '20 m/s'
            }
        })
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