import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

// toma como parametro un state para retornar un objeto de state
const mapStateToProps = ({ city }) => ({ city });

// este connect establece las nuevas propiedades y la pasa al presentación component
export default connect(mapStateToProps, null)(ForecastExtendedContainer);