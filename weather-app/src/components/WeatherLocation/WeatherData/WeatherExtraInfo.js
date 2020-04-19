import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div className="weather_extra_info">
            <span className="extra_info_text">{`Humedad: ${humidity} % - `}</span>
            <span className="extra_info_text">{`Vientos: ${wind} wind`}</span>
        </div>
    );
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}


export default WeatherExtraInfo;