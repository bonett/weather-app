import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component {

    render(){

        const { city } = this.props;
        return(
            <div className="forecast_extended_content">
                {city}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;