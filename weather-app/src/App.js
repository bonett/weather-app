import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LocationList from './components/LocationList';
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

  handleSelectedLocation = city => {
    console.log('asdasd');
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
