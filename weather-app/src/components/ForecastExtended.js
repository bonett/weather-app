import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecastItem';
import transformForecast from '../services/transformForecast';
import { API_KEY, URL_BASE } from './../constants/config';
import './styles.css';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }

    componentDidMount() {
        const { city } = this.props;
        
        this.updateCity(city);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.city !== this.props.city) {
            this.setState({
                forecastData: null
            });

            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${URL_BASE}forecast?q=${city}&APPID=${API_KEY}`;

        fetch(url_forecast)
            .then(data => data.json())
            .then(weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({
                    forecastData
                })
            });
    }

    renderProgress() {
        return <h3>Cargando Pronóstico extendido ...</h3>
    }

    renderForecastItemDay(forecast) {
        return forecast.map((forecast) => <ForecastItem weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={`${forecast.weekDay}${forecast.hour}`} />)
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className="forecast_extended_content">
                <h2 className="forecast_title">Pronóstico extendido para {city}</h2>
                {
                    forecastData ? this.renderForecastItemDay(forecastData) : this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;