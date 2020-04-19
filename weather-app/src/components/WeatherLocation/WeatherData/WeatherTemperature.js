import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes, { number } from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcons = ( weatherState ) => {
    
    const icon = icons[weatherState];

    if (icon) {
        return <WeatherIcons name={icon} size="2x" />
    } else {
        return <WeatherIcons name={"day-sunny"} size="2x" />
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div>
            {
                getWeatherIcons(weatherState)
            }
            <span>{`${temperature} Cº`}</span>
        </div>
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;