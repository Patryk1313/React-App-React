import React, { Component } from 'react';
import Weather from './Weather';
import Search from './Search';

import './App.css';
import './untilities.css';

const KELVIN = 274;
const APIKey = '8d4e7766d7e7bc6d818d57d0f2ba1015';

class App extends Component {

  state = {
    value: '',
    icon: 'unknown',
    city:'',
    loc: '',
    temp: '',
    desc: '',
    feels_like: '',
    wind: '',
    pressure: '',
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault();
    
    // API
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
    .then(res => res.json())
    .then((data) => this.setState({
      icon: data.weather[0].icon,
      city: data.name + ", ",
      loc: data.sys.country ,
      temp: Math.floor(Math.ceil(data.main.temp - KELVIN)) + "°",
      desc: data.weather[0].main,
      feels_like: Math.floor(Math.ceil(data.main.feels_like - KELVIN)) + "°",
      wind: data.wind.speed + " m/s",
      pressure: data.main.pressure + " hPa",
    }))
  }

  render() {
    return (
      <div>
        <Search 
          value={this.state.value} 
          change={this.handleInputChange} 
          submit={this.handleCitySubmit}
        />
      <Weather weather={this.state}/>
      </div>
    );
  }
}

export default App;