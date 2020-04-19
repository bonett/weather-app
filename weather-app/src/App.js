import React from 'react';
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

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
