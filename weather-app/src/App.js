import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

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
       <div>
          <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Weather App
                </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                Details
              </div>
            </Paper>
          </Col>
        </Row>
       </div>
    );
  }
}

export default App;
