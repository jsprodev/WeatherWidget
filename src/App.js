import React, { Component } from 'react';
import './App.css';
import WeatherWidgetComponent from './components/WeatherWidgetComponent';
import WeatherSearchComponent from './components/WeatherSearchComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <WeatherSearchComponent />
        <WeatherWidgetComponent />      
      </React.Fragment> 
    );
  }
}

export default App;
