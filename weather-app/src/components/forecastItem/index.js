import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './../../App.css';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div className="forecast_item">
        <div className="item_info"> {weekDay} - hora: {hour} hs </div>
        <WeatherData data={data} />
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
}

export default ForecastItem;