import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="weather_location_content">
        <Location city={"Alemania"}/>
        <WeatherData />
    </div>
);

export default WeatherLocation;