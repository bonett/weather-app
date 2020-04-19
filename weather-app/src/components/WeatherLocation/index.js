import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import API_WEATHER from './../../constants/config';
import transformWeather from './../../services/transformWeather';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'London,UK',
            data: null
        }
    }

    componentDidMount() {
        this.hanleUpdateClick();
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
                { data ? <WeatherData data={data} /> : <CircularProgress size={50}/> }
            </div>
        )
    }
}

export default WeatherLocation;