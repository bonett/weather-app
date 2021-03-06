import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transformWeather from './../../services/transformWeather';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        this.hanleUpdateClick();
    }
    

    hanleUpdateClick = () => {
        const { city } = this.state;
        const api_weather = getUrlWeatherByCity(city)
        fetch(api_weather)
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
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weather_location_content" onClick={onWeatherLocationClick}>
                <Location city={city} />
                { data ? <WeatherData data={data} /> : <CircularProgress size={50}/> }
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;