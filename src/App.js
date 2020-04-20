import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions'
import './App.css';

const theme = createMuiTheme({
  pallete: {
    primary: {
      "50": "#21412a",
      "100": "#21412a",
      "200": "#21412a",
      "300": "#21412a",
      "400": "#21412a",
      "500": "#21412a",
      "600": "#21412a",
      "700": "#21412a",
      "800": "#21412a",
      "900": "#21412a",
      "A100": "#21412a",
      "A200": "#21412a",
      "A400": "#21412a",
      "A700": "#21412a",
      "contrastDefaultColor": "light"
    }
  },
});

const cities = [
  "Medellin,col",
  "London,uk",
  "Buenos Aires,ar",
  "Washington,us",
  "Quebec,ca",
  "Madrid,es",
];

class App extends Component {

  constructor() {
    super();

    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({ city });

    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" color="inherit">Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={4}>
              <div className="details">
                {
                  city && <ForecastExtended city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <div className="footer_content">
              <p>React Redux, Made by Wilfrido Bonett</p>
            </div>
          </Col>
        </Row>
      </MuiThemeProvider>
    );
  }
}

const mapDispacthToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispacthToPropsActions)(App);

export default AppConnected;
