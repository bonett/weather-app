import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        // LLamo al action y paso city
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

// valido por props los actions como funcion y props
LocationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
};

// Dispara acciones y lo hago igual a una variable para 
const mapDispacthToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

// exporta y conecta map de acciones con el componente que quiero que tenga acceso al store y sus estados
export default connect(null, mapDispacthToProps)(LocationListContainer);