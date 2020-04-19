import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
    
    const HandleWeatherLocationClick = city => {
        onSelectedLocation(city);
    }

    const strToComponents = cities => (
        cities.map(city => ( <WeatherLocation city={city} key={city} onWeatherLocationClick={() => HandleWeatherLocationClick(city)} />) )
    );
    
    return (
        <div>
            {strToComponents(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;